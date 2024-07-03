#!/bin/bash

if [ -z "$1" ]; then
  echo "Please enter a branch name."
  exit 1
fi

git checkout -b "$1"