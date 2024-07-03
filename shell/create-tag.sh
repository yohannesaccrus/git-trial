#!/bin/bash

if [ -z "$1" ]; then
  echo "Please enter a tag name."
  exit 1
fi

TAG_NAME=$1

if git tag "$TAG_NAME"; then
  echo "Tag '$TAG_NAME' created successfully."
else
  echo "Failed to create tag '$TAG_NAME'."
  exit 1
fi

if git push origin "$TAG_NAME"; then
  echo "Tag '$TAG_NAME' pushed to origin successfully."
else
  echo "Failed to push tag '$TAG_NAME' to origin."
  exit 1
fi
