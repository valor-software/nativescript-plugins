module.exports = {
  message: 'NativeScript Plugins ~ made with โค๏ธ  Choose a command to start...',
  pageSize: 32,
  scripts: {
    default: 'nps-i',
    nx: {
      script: 'nx',
      description: 'Execute any command with the @nrwl/cli',
    },
    format: {
      script: 'nx format:write',
      description: 'Format source code of the entire workspace (auto-run on precommit hook)',
    },
    '๐ง': {
      script: `npx cowsay "NativeScript plugin demos make developers ๐"`,
      description: '_____________  Apps to demo plugins with  _____________',
    },
    // demos
    apps: {
      '...Vanilla...': {
        script: `npx cowsay "Nothing wrong with vanilla ๐ฆ"`,
        description: ` ๐ป Vanilla`,
      },
      demo: {
        clean: {
          script: 'nx run demo:clean',
          description: 'โ  Clean  ๐งน',
        },
        ios: {
          script: 'nx run demo:ios',
          description: 'โ  Run iOS  ๏ฃฟ',
        },
        android: {
          script: 'nx run demo:android',
          description: 'โ  Run Android  ๐ค',
        },
      },
      '...Angular...': {
        script: `npx cowsay "Test all the Angles!"`,
        description: ` ๐ป Angular`,
      },
      'demo-angular': {
        clean: {
          script: 'nx run demo-angular:clean',
          description: 'โ  Clean  ๐งน',
        },
        ios: {
          script: 'nx run demo-angular:ios',
          description: 'โ  Run iOS  ๏ฃฟ',
        },
        android: {
          script: 'nx run demo-angular:android',
          description: 'โ  Run Android  ๐ค',
        },
      },
    },
    'โ๏ธ': {
      script: `npx cowsay "@valor/* packages will keep your โ๏ธ cranking"`,
      description: '_____________  @valor/*  _____________',
    },
    // packages
    // build output is always in dist/packages
    '@valor': {
      // @valor/nativescript-websockets
      'nativescript-websockets': {
        build: {
          script: 'nx run nativescript-websockets:build.all',
          description: '@valor/nativescript-websockets: Build',
        },
      },
      // @valor/nativescript-ngrx-devtools
      'nativescript-ngrx-devtools': {
        build: {
          script: 'nx run nativescript-ngrx-devtools:build.all',
          description: '@valor/nativescript-ngrx-devtools: Build',
        },
      },
      // @valor/nativescript-barcodescanner
      'nativescript-barcodescanner': {
        build: {
          script: 'nx run nativescript-barcodescanner:build.all',
          description: '@valor/nativescript-barcodescanner: Build',
        },
      },
      // @valor/nativescript-feedback
      'nativescript-feedback': {
        build: {
          script: 'nx run nativescript-feedback:build.all',
          description: '@valor/nativescript-feedback: Build',
        },
      },
      'build-all': {
        script: 'nx run-many --target=build.all --all',
        description: 'Build all packages',
      },
    },
    'โก': {
      script: `npx cowsay "Focus only on source you care about for efficiency โก"`,
      description: '_____________  Focus (VS Code supported)  _____________',
    },
    focus: {
      'nativescript-websockets': {
        script: 'nx run nativescript-websockets:focus',
        description: 'Focus on @valor/nativescript-websockets',
      },
      'nativescript-ngrx-devtools': {
        script: 'nx run nativescript-ngrx-devtools:focus',
        description: 'Focus on @valor/nativescript-ngrx-devtools',
      },
      'nativescript-barcodescanner': {
        script: 'nx run nativescript-barcodescanner:focus',
        description: 'Focus on @valor/nativescript-barcodescanner',
      },
      'nativescript-feedback': {
        script: 'nx run nativescript-feedback:focus',
        description: 'Focus on @valor/nativescript-feedback',
      },
      reset: {
        script: 'nx g @nativescript/plugin-tools:focus-packages',
        description: 'Reset Focus',
      },
    },
    '.....................': {
      script: `npx cowsay "That's all for now folks ~"`,
      description: '.....................',
    },
  },
};
