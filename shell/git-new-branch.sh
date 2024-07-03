#!/bin/bash

if [ -z "$1" ]; then
  echo "You must provide a branch name."
  exit 1
fi

git checkout -b "$1"