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
    clean build \
    BUILD_DIR=$OUTPUTPATH \
    SKIP_INSTALL=NO \
    -quiet

echo "Build for iphoneos"
xcodebuild \
    -project $PACKAGENAME.xcodeproj \
    -scheme $PACKAGENAME \
    -sdk iphoneos \
    -configuration Release \
    clean build \
    BUILD_DIR=$OUTPUTPATH \
    CODE_SIGN_IDENTITY="" \
    CODE_SIGNING_REQUIRED=NO \
    SKIP_INSTALL=NO \
    -quiet

echo "Build for visionos"
xcodebuild \
    -project $PACKAGENAME.xcodeproj \
    -scheme $PACKAGENAME \
    -sdk xrsimulator \
    -configuration Release \
    clean build \
    BUILD_DIR=$OUTPUTPATH \
    -destination "generic/platform=xrsimulator" \
    EXCLUDED_ARCHS="i386 x86_64" \
    CODE_SIGN_IDENTITY="" \
    CODE_SIGNING_REQUIRED=NO \
    SKIP_INSTALL=NO \
    -quiet

echo "Creating XCFramework"
xcodebuild \
    -create-xcframework \
    -framework $OUTPUTPATH/Release-iphoneos/$PACKAGENAME.framework \
    -debug-symbols $OUTPUTPATH/Release-iphoneos/$PACKAGENAME.framework.dSYM \
    -framework $OUTPUTPATH/Release-iphonesimulator/$PACKAGENAME.framework \
    -debug-symbols $OUTPUTPATH/Release-iphonesimulator/$PACKAGENAME.framework.dSYM \
    -framework $OUTPUTPATH/Release-xrsimulator/$PACKAGENAME.framework \
    -debug-symbols $OUTPUTPATH/Release-xrsimulator/$PACKAGENAME.framework.dSYM \
    -output $OUTPUTPATH/$PACKAGENAME.xcframework

mkdir -p $COPYPATH
rm -rf $COPYPATH/$PACKAGENAME.xcframework 
cp -R $OUTPUTPATH/$PACKAGENAME.xcframework $COPYPATH/