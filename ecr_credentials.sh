#!/usr/bin/env bash

mkdir -p ~/.aws

cat > ~/.aws/credentials << EOL
[amplifyProfile]
aws_access_key_id = ${AWS_ACCESS_KEY}
aws_secret_access_key = ${AWS_SECRET_KEY}
EOL