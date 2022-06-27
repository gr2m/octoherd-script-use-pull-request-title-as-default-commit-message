// @ts-check

/**
 * Enables use_squash_pr_title_as_default setting for repository
 *
 * @param {import('@octoherd/cli').Octokit} octokit
 * @param {import('@octoherd/cli').Repository} repository
 */
export async function script(octokit, repository) {
  if (repository.archived) return;

  await octokit.request("PATCH /repos/{owner}/{repo}", {
    owner: repository.owner.login,
    repo: repository.name,
    use_squash_pr_title_as_default: true,
  });
  octokit.log.info(
    "Enabled `use_squash_pr_title_as_default` in %s/settings",
    repository.html_url
  );
}
