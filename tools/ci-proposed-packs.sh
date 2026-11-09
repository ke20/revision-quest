#!/usr/bin/env bash
# Révision Quest — CI, pull request from a fork (a course proposed by someone outside the project).
# Every chapter file added or changed by the pull request goes through tools/pack-add.js in this run:
# strict format (never executed), full check, then its packs/catalog.js entry, exactly like the maintainer will do
# with `mise run pack:add` before merging. Nothing is pushed back. The tests that follow see the merged state.
# Usage: tools/ci-proposed-packs.sh <base commit>     (report also appended to $GITHUB_STEP_SUMMARY when set)
set -euo pipefail

base="${1:?usage: tools/ci-proposed-packs.sh <base commit>}"
summary="${GITHUB_STEP_SUMMARY:-/dev/null}"
failed=0

# chapter files only (packs/<niveau>/<matiere>/<cours>.js); group files are checked by validate --all
mapfile -t files < <(git diff --name-only --diff-filter=AM "$base" HEAD -- packs | grep -E '^packs/[a-z0-9-]+/[a-z0-9-]+/[a-z0-9-]+\.js$' || true)

{
  echo "## Cours proposés"
  echo
} >> "$summary"

if [ "${#files[@]}" -eq 0 ]; then
  echo "Aucun fichier de chapitre ajouté ou modifié." | tee -a "$summary"
  exit 0
fi

for f in "${files[@]}"; do
  echo "::group::$f"
  if out="$(node tools/pack-add.js "$f" 2>&1)"; then status="✅ accepté"; else status="❌ refusé"; failed=1; fi
  echo "$out"
  echo "::endgroup::"
  {
    echo "### \`$f\` : $status"
    echo
    echo '```text'
    echo "$out"
    echo '```'
    echo
  } >> "$summary"
done

if [ "$failed" -ne 0 ]; then
  {
    echo "Corrige les erreurs ci-dessus (voir packs/README.md), puis envoie à nouveau le fichier dans la même pull request."
  } | tee -a "$summary"
  exit 1
fi
echo "Chaque cours proposé passe les contrôles. Le responsable du projet lancera mise run pack:add avant de fusionner." | tee -a "$summary"
