module.exports = {
	extends: ['@commitlint/config-conventional'],
	rules: {
		'type-enum': [2, 'always', ['feat', 'refactor', 'fix', 'merge', 'hotfix', 'build', 'docs', 'revert', 'test']],
	},
};
