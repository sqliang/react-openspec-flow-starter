/** @type {import('@commitlint/types').UserConfig} */
module.exports = {
  extends: ['@commitlint/config-conventional'],
  formatter: '@commitlint/format',
  rules: {
    'header-min-length': [2, 'always', 10],
    'header-max-length': [2, 'always', 100],
    'header-case': [2, 'always', ['lower-case']],
    'type-empty': [2, 'never'],
    'scope-empty': [0, 'always'],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [0, 'never'],
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'style',
        'refactor',
        'perf',
        'test',
        'build',
        'ci',
        'chore',
        'revert',
      ],
    ],
  },
};
