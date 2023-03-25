#!/bin/bash

usage="Usage: $(basename "$0") [-h] [-i INPUT_DIR] [-o OUTPUT_DIR]

Provided a directory with files of type '*.html.markdown', uses the GitHub REST
API to convert each markdown file to HTML.

Options:
-h show this help text
-i (required) path to directory with input files (*.html.markdown)
-o (required) path to directory for output files (*.html)"

while getopts h:i:o: flag; do
case "$flag" in
    h) echo "$usage"; exit ;;
    i) INPUT_DIR=$OPTARG ;;
    o) OUTPUT_DIR=$OPTARG ;;
    *) printf "\n%s\n" "$usage"
esac
done

shopt -s nullglob
for i in "$INPUT_DIR"/*.markdown; do
content=$(< "$i")
filename=${i%.markdown}
filename=${filename#./guides/}
target="$OUTPUT_DIR"/$filename

gh api \
    --method POST \
    -H "Accept: application/vnd.github+json" \
    -H "X-GitHub-Api-Version: 2022-11-28" \
    /markdown \
    -f mode="gfm" \
    -f text="$content" > "$target"
done
