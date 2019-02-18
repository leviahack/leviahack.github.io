// Third-party dependencies
import { danger, markdown, warn, fail } from 'danger';
import includes from 'lodash.includes';
import fs from 'fs';

const fromRoot = path => path.replace(`${process.cwd()}/`, '');

function linkToCircleAsset(pathFromProjectRoot) {
  const buildNum = process.env.CIRCLE_BUILD_NUM;
  const repo = process.env.CIRCLE_PROJECT_REPONAME;
  const idx = process.env.CIRCLE_NODE_INDEX;

  return [
    `https://${buildNum}-129114508-gh.circle-artifacts.com/`,
    `${idx}/home/circleci`,
    `/${repo}/${pathFromProjectRoot}`
  ].join('');
}

// Warn no updated lockfile
const packageChanged = includes(danger.git.modified_files, 'package.json');
const lockfileChanged = includes(danger.git.modified_files, 'yarn.lock');
if (packageChanged && !lockfileChanged) {
  const message = 'Changes were made to package.json, but not to yarn.lock';
  const idea = 'Perhaps you need to run `yarn install`?';
  warn(`${message} - <i>${idea}</i>`);
}

// Warn summary on PR
if (danger.github.pr.body.length < 100) {
  fail('This pull request needs a description.');
}

// Create log file with Failed linter output
const testFile = 'eslint-report';
const linterOutput = fs.readFileSync(testFile).toString();

// Coverage report
let coverageReport = '';
try {
  const coverageLink = linkToCircleAsset('coverage/lcov-report/index.html');
  coverageReport = `# Tests\n All tests passed! [View Coverage Report](${coverageLink})`;
} catch (err) {
  const summary = JSON.parse(err.stdout);
  const failedTests = summary.testResults.filter(t => t.status !== 'passed');
  const failSummary = failedTests
    .map(
      t =>
        `<details>
          <summary>${fromRoot(t.name)}</summary>
          <pre>${t.message}</pre>
        </details>`
    )
    .join('\n');

  fail(`
    The following unit tests did _not_ pass 😔.\n
    All tests must pass before this PR can be merged\n\n\n
    ${failSummary}
  `);
}

markdown(`${linterOutput}\n${coverageReport}`);
