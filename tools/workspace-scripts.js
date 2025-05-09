module.exports = {
  message: 'NativeScript Plugins ~ made with ❤️  Choose a command to start...',
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
    '🔧': {
      script: `npx cowsay "NativeScript plugin demos make developers 😊"`,
      description: '_____________  Apps to demo plugins with  _____________',
    },
    // demos
    apps: {
      '...Vanilla...': {
        script: `npx cowsay "Nothing wrong with vanilla 🍦"`,
        description: ` 🔻 Vanilla`,
      },
      demo: {
        clean: {
          script: 'nx clean demo',
          description: '⚆  Clean  🧹',
        },
        ios: {
          script: 'nx debug demo ios',
          description: '⚆  Run iOS  ',
        },
        android: {
          script: 'nx debug demo android',
          description: '⚆  Run Android  🤖',
        },
      },
      '...Angular...': {
        script: `npx cowsay "Test all the Angles!"`,
        description: ` 🔻 Angular`,
      },
      'demo-angular': {
        clean: {
          script: 'nx clean demo-angular',
          description: '⚆  Clean  🧹',
        },
        ios: {
          script: 'nx debug demo-angular ios',
          description: '⚆  Run iOS  ',
        },
        android: {
          script: 'nx debug demo-angular android',
          description: '⚆  Run Android  🤖',
        },
      },
    },
    '⚙️': {
      script: `npx cowsay "@valor/* packages will keep your ⚙️ cranking"`,
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
      // @valor/nativescript-view-shot
      'nativescript-view-shot': {
        build: {
          script: 'nx run nativescript-view-shot:build.all',
          description: '@valor/nativescript-view-shot: Build',
        },
      },
      // @valor/nativescript-in-app-review
      'nativescript-in-app-review': {
        build: {
          script: 'nx run nativescript-in-app-review:build.all',
          description: '@valor/nativescript-in-app-review: Build',
        },
      },
      'build-all': {
        script: 'nx run-many --target=build.all --all',
        description: 'Build all packages',
      },
    },
    '⚡': {
      script: `npx cowsay "Focus only on source you care about for efficiency ⚡"`,
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
      'nativescript-view-shot': {
        script: 'nx run nativescript-view-shot:focus',
        description: 'Focus on @valor/nativescript-view-shot',
      },
      'nativescript-in-app-review': {
        script: 'nx run nativescript-in-app-review:focus',
        description: 'Focus on @valor/nativescript-in-app-review',
      },
      reset: {
        script: 'nx g @valor/plugin-tools:focus-packages',
        description: 'Reset Focus',
      },
    },
    '.....................': {
      script: `npx cowsay "That's all for now folks ~"`,
      description: '.....................',
    },
  },
};
