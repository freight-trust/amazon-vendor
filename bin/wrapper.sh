#!/usr/bin/env bash
set -e

# Fix ownership of output files
finish() {
    # Fix ownership of output files
    user_id=$(stat -c '%u:%g' $PWD)
    chown -R ${user_id} $PWD
}
trap finish EXIT

# Call tool with parameters
$@
