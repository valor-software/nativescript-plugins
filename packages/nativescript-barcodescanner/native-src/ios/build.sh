#!/bin/sh

echo "Set exit on simple errors"
set -e

PACKAGENAME=BarcodeScannerFramework
OUTPUTPATH=$(PWD)/build
COPYPATH=$(PWD)/../../platforms/ios/
# make xcode builds deterministic
export ZERO_AR_DATE=1

rm -rf $OUTPUTPATH

CUSTOM_OTHER_CFLAGS="-ffile-prefix-map=$(PWD)=."

echo "Build for iphonesimulator"
xcodebuild \
    -project $PACKAGENAME.xcodeproj \
    -scheme $PACKAGENAME \
    -sdk iphonesimulator \
    -configuration Release \
    clean build \
    BUILD_DIR=$OUTPUTPATH \
    SKIP_INSTALL=NO \
    OTHER_CFLAGS="$CUSTOM_OTHER_CFLAGS" \
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
    OTHER_CFLAGS="$CUSTOM_OTHER_CFLAGS" \
    -quiet

echo "Creating XCFramework"
xcodebuild \
    -create-xcframework \
    -framework $OUTPUTPATH/Release-iphoneos/$PACKAGENAME.framework \
    -debug-symbols $OUTPUTPATH/Release-iphoneos/$PACKAGENAME.framework.dSYM \
    -framework $OUTPUTPATH/Release-iphonesimulator/$PACKAGENAME.framework \
    -debug-symbols $OUTPUTPATH/Release-iphonesimulator/$PACKAGENAME.framework.dSYM \
    -output $OUTPUTPATH/$PACKAGENAME.xcframework


echo "Remapping paths in Relocations files"
for dsym_dir in $OUTPUTPATH/$PACKAGENAME.xcframework/*/dSYMs/$PACKAGENAME.framework.dSYM/Contents/Resources/Relocations/*/; do
    if [ -d "$dsym_dir" ]; then
        for yml_file in "$dsym_dir"*.yml; do
            if [ -f "$yml_file" ]; then
                sed -i '' "s|$(PWD)|.|g" "$yml_file"
            fi
        done
    fi
done

mkdir -p $COPYPATH
rm -rf $COPYPATH/$PACKAGENAME.xcframework 
cp -R $OUTPUTPATH/$PACKAGENAME.xcframework $COPYPATH/