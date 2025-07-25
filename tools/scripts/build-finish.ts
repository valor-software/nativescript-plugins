const ngPackage = require('ng-packagr');
const path = require('path');
const fs = require('fs-extra');

const rootDir = path.resolve(path.join(__dirname, '..', '..'));
const nxConfigPath = path.resolve(path.join(rootDir, 'nx.json'));
const nxConfig = JSON.parse(fs.readFileSync(nxConfigPath));
const npmScope = nxConfig.npmScope;

const cmdArgs = process.argv.slice(2);
const packageName = cmdArgs[0];
const publish = cmdArgs[1] === 'publish';

const packagePath = path.join('packages', packageName, 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packagePath));
const npmPackageName = packageJson.name;
console.log(`Building ${npmPackageName}...${publish ? 'and publishing.' : ''}`);

// build angular package
function buildAngular() {
  ngPackage
    .ngPackagr()
    .forProject(path.join('packages', packageName, 'angular', 'ng-package.json'))
    .withTsConfig(path.join('packages', packageName, 'angular', 'tsconfig.angular.json'))
    .build()
    .then(() => {
      console.log(`${npmPackageName} angular built successfully.`);
      finishPreparation();
    })
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
}

// copy angular ng-packagr output to dist/packages/{name}
function copyAngularDist() {
  fs.copy(path.join('packages', packageName, 'angular', 'dist'), path.join('dist', 'packages', packageName, 'angular'))
    .then(() => {
      console.log(`${npmPackageName} angular built successfully.`);
      // buildNativeSrc();
      finishPreparation();
    })
    .catch((err) => console.error(err));
}

function finishPreparation() {
  fs.copy(path.join('tools', 'assets', 'publishing'), path.join('dist', 'packages', packageName))
    .then(() => console.log(`${npmPackageName} ready to publish.`))
    .catch((err) => console.error(err));
}

function removeTypeModule() {
  const packageJsonPath = path.join('dist', 'packages', packageName, 'package.json');
  if (!fs.existsSync(packageJsonPath)) {
    console.warn(`Package JSON not found at ${packageJsonPath}. Skipping removal of "type": "module".`);
    return;
  }
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  let changed = false;
  if (packageJson.type === 'module') {
    delete packageJson.type;
    changed = true;
  }
  if (packageJson.types?.endsWith('.d.d.ts')) {
    delete packageJson.types;
    changed = true;
  }
  if (packageJson.module) {
    delete packageJson.module;
    changed = true;
  }
  if (changed) {
    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2), 'utf8');
    console.log(`Removed "type": "module" and related fields from ${packageJsonPath}.`);
  } else {
    console.log(`No changes needed in ${packageJsonPath}.`);
  }
}

if (fs.existsSync(path.join(rootDir, 'packages', packageName, 'angular'))) {
  // package has angular specific src, build it first
  buildAngular();
} else {
  finishPreparation();
}

removeTypeModule();
