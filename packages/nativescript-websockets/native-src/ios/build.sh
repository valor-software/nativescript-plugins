#!/bin/sh

echo "Set exit on simple errors"
set -e

PACKAGENAME=NativeScriptWebSockets
OUTPUTPATH=$(PWD)/build
COPYPATH=$(PWD)/../../platforms/ios/
# make xcode builds deterministic
export ZERO_AR_DATE=1

rm -rf $OUTPUTPATH

echo "Build for iphonesimulator"
xcodebuild \
    -project $PACKAGENAME.xcodeproj \
    -scheme $PACKAGENAME \
    -sdk iphonesimulator \
    -configuration Release \
    -destination "generic/platform=iOS Simulator" \
    clean build \
    BUILD_DIR=$OUTPUTPATH \
    SKIP_INSTALL=NO \
    BUILD_LIBRARY_FOR_DISTRIBUTION=YES \
    -quiet

echo "Build for iphoneos"
xcodebuild \
    -project $PACKAGENAME.xcodeproj \
    -scheme $PACKAGENAME \
    -sdk iphoneos \
    -configuration Release \
    -destination "generic/platform=iOS" \
    clean build \
    BUILD_DIR=$OUTPUTPATH \
    CODE_SIGN_IDENTITY="" \
    CODE_SIGNING_REQUIRED=NO \
    SKIP_INSTALL=NO \
    BUILD_LIBRARY_FOR_DISTRIBUTION=YES \
    -quiet

echo "Build for Mac Catalyst"
xcodebuild \
    -project $PACKAGENAME.xcodeproj \
    -scheme $PACKAGENAME \
    -configuration Release \
    -destination "generic/platform=macOS,variant=Mac Catalyst" \
    clean build \
    BUILD_DIR=$OUTPUTPATH \
    CODE_SIGN_IDENTITY="" \
    CODE_SIGNING_REQUIRED=NO \
    SKIP_INSTALL=NO \
    BUILD_LIBRARY_FOR_DISTRIBUTION=YES \
    -quiet

echo "Build for visionos device"
xcodebuild \
    -project $PACKAGENAME.xcodeproj \
    -scheme $PACKAGENAME \
    -configuration Release \
    -destination "generic/platform=visionOS" \
    clean build \
    BUILD_DIR=$OUTPUTPATH \
    SKIP_INSTALL=NO \
    BUILD_LIBRARY_FOR_DISTRIBUTION=YES \
    -quiet

echo "Build for visionos simulator"
xcodebuild \
    -project $PACKAGENAME.xcodeproj \
    -scheme $PACKAGENAME \
    -configuration Release \
    -destination "generic/platform=visionOS Simulator" \
    clean build \
    BUILD_DIR=$OUTPUTPATH \
    SKIP_INSTALL=NO \
    BUILD_LIBRARY_FOR_DISTRIBUTION=YES \
    -quiet

echo "Creating XCFramework"
xcodebuild \
    -create-xcframework \
    -framework $OUTPUTPATH/Release-iphoneos/$PACKAGENAME.framework \
    -debug-symbols $OUTPUTPATH/Release-iphoneos/$PACKAGENAME.framework.dSYM \
    -framework $OUTPUTPATH/Release-maccatalyst/$PACKAGENAME.framework \
    -debug-symbols $OUTPUTPATH/Release-maccatalyst/$PACKAGENAME.framework.dSYM \
    -framework $OUTPUTPATH/Release-iphonesimulator/$PACKAGENAME.framework \
    -debug-symbols $OUTPUTPATH/Release-iphonesimulator/$PACKAGENAME.framework.dSYM \
    -framework $OUTPUTPATH/Release-xros/$PACKAGENAME.framework \
    -debug-symbols $OUTPUTPATH/Release-xros/$PACKAGENAME.framework.dSYM \
    -framework $OUTPUTPATH/Release-xrsimulator/$PACKAGENAME.framework \
    -debug-symbols $OUTPUTPATH/Release-xrsimulator/$PACKAGENAME.framework.dSYM \
    -output $OUTPUTPATH/$PACKAGENAME.xcframework

mkdir -p $COPYPATH
rm -rf $COPYPATH/$PACKAGENAME.xcframework 
cp -R $OUTPUTPATH/$PACKAGENAME.xcframework $COPYPATH/