// Usage:
//   yarn release <version|bump> --projects <a,b> [--first-release] [--dry-run] [--otp <code>]
//   yarn release --publish-only --projects <a,b> [--dry-run] [--otp <code>]
//
// `nx release --projects` skips task dependencies of nx-release-publish, so it would publish
// whatever is in dist/. This builds the released projects between versioning and publishing.
const { execFileSync } = require('child_process');
const { parseArgs } = require('util');
const { release, releasePublish } = require('nx/release');

const { values, positionals } = parseArgs({
  allowPositionals: true,
  options: {
    projects: { type: 'string', short: 'p' },
    'publish-only': { type: 'boolean', default: false },
    'first-release': { type: 'boolean', default: false },
    'dry-run': { type: 'boolean', short: 'd', default: false },
    otp: { type: 'string' },
    verbose: { type: 'boolean', default: false },
  },
});

const projects = (values.projects ?? '')
  .split(',')
  .map((p) => p.trim())
  .filter(Boolean);
const specifier = positionals[0];
const publishOnly = values['publish-only'];
const dryRun = values['dry-run'];
const firstRelease = values['first-release'];
const verbose = values.verbose;

function fail(message) {
  console.error(message);
  process.exit(1);
}

if (!projects.length) {
  fail('--projects is required');
}
if (publishOnly === !!specifier) {
  fail('Pass either a version specifier or --publish-only');
}

function build(projectsToBuild) {
  execFileSync('npx', ['nx', 'run-many', '-t', 'build.all', '-p', projectsToBuild.join(','), '--skip-nx-cache'], { stdio: 'inherit' });
}

async function publish(projectsToPublish) {
  const results = await releasePublish({
    projects: projectsToPublish,
    dryRun,
    verbose,
    firstRelease,
    otp: values.otp ? Number(values.otp) : undefined,
  });
  const failed = Object.entries(results).filter(([, { code }]) => code !== 0);
  if (failed.length) {
    fail(`Publish failed for ${failed.map(([project]) => project).join(', ')}. Once fixed, rerun with:\n  yarn release --publish-only --projects ${failed.map(([project]) => project).join(',')}`);
  }
}

(async () => {
  if (publishOnly) {
    build(projects);
    await publish(projects);
    return;
  }

  const result = await release({
    specifier,
    projects,
    dryRun,
    verbose,
    firstRelease,
    skipPublish: true,
  });
  if (typeof result === 'number') {
    process.exit(result);
  }
  const { projectsVersionData } = result;
  const released = Object.keys(projectsVersionData).filter((project) => projectsVersionData[project].newVersion !== null);
  if (!released.length) {
    console.log('No new versions to publish.');
    return;
  }
  if (dryRun) {
    // the bumped package.json is never written, so building/publishing would use the current version
    console.log(`Dry run: would build and publish ${released.join(', ')}`);
    return;
  }
  build(released);
  await publish(released);
})().catch((e) => fail(e?.stack ?? e));
