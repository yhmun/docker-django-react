#!/bin/sh

echo "Copy static files..."

ls -al ./static

ls -al ./build/static

rm -rf ./static/*
cp -rf ./build/static .

exec "$@"
