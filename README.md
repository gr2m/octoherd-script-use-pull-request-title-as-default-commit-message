# octoherd-script-use-pull-request-title-as-default-commit-message

> Enables `use_squash_pr_title_as_default` setting for repository

[![@latest](https://img.shields.io/npm/v/octoherd-script-use-pull-request-title-as-default-commit-message.svg)](https://www.npmjs.com/package/octoherd-script-use-pull-request-title-as-default-commit-message)
[![Build Status](https://github.com/gr2m/octoherd-script-use-pull-request-title-as-default-commit-message/workflows/Test/badge.svg)](https://github.com/gr2m/octoherd-script-use-pull-request-title-as-default-commit-message/actions?query=workflow%3ATest+branch%3Amain)

When merging a pull request using the <kbd>Squash and Merge</kbd> button, the default commit message depends on how many commits there are in the pull request.

1. If there is a single commit, the commit message is used as the squash commit message.
2. If there are multiple commits, the pull request titles is used as the default commit message.

In May 2022, [GitHub introduced the "Default to PR title for squash merge commits" option](https://github.blog/changelog/2022-05-11-default-to-pr-titles-for-squash-merge-commit-messages/). This script enables this feature programmatically in all given repositories.

## Usage

Minimal usage

```js
npx octoherd-script-use-pull-request-title-as-default-commit-message
```

Pass all options as CLI flags to avoid user prompts

```js
npx octoherd-script-use-pull-request-title-as-default-commit-message \
  -T ghp_0123456789abcdefghjklmnopqrstuvwxyzA \
  -R "gr2m/*"
```

## Options

| option                       | type             | description                                                                                                                                                                                                                                 |
| ---------------------------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--octoherd-token`, `-T`     | string           | A personal access token ([create](https://github.com/settings/tokens/new?scopes=repo)). Script will create one if option is not set                                                                                                         |
| `--octoherd-repos`, `-R`     | array of strings | One or multiple space-separated repositories in the form of `repo-owner/repo-name`. `repo-owner/*` will find all repositories for one owner. `*` will find all repositories the user has access to. Will prompt for repositories if not set |
| `--octoherd-bypass-confirms` | boolean          | Bypass prompts to confirm mutating requests                                                                                                                                                                                                 |

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md)

## About Octoherd

[@octoherd](https://github.com/octoherd/) is project to help you keep your GitHub repositories in line.

## License

[ISC](LICENSE.md)
