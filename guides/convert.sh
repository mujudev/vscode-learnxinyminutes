#!/bin/bash


content=$(< /Users/musa.jundi/dev/personal/learnxinyminutes/guides/typescript.html.markdown)

gh api \
    --method POST \
    -H "Accept: application/vnd.github+json" \
    -H "X-GitHub-Api-Version: 2022-11-28" \
    /markdown \
    -f mode="gfm" \
    -f text="$content" > typescript.html
