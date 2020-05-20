#!/bin/bash

aws configure set default.s3.signature_version s3v4
aws s3 sync --exclude index.html --exclude service-worker.js --region=us-east-2 /app/build s3://aubronwood.com
aws s3 cp --region=us-east-2 --cache-control no-cache /app/build/index.html s3://aubronwood.com/index.html
aws s3 cp --region=us-east-2 --cache-control no-cache /app/build/service-worker.js s3://aubronwood.com/service-worker.js
