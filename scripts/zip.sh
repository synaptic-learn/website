#!/bin/sh

rm -f deployment.zip
7z a deployment.zip build dist .env.example
7z a deployment.zip ./deployment/*