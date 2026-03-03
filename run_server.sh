#!/usr/bin/env bash
set -euo pipefail

# Ensure Sass/Jekyll reads theme files as UTF-8 instead of US-ASCII.
export LANG="${LANG:-C.UTF-8}"
export LC_ALL="${LC_ALL:-C.UTF-8}"

bundle exec jekyll serve --no-watch --host 0.0.0.0 --port 4000 "$@"
