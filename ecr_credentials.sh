#!/usr/bin/env bash

mkdir -p ~/.aws

cat > ~/.aws/config << EOL
[profile amplifyProfile]
region=us-west-2
EOL

cat > ~/.aws/credentials << EOL
[amplifyProfile]
aws_access_key_id = ${AWS_ACCESS_KEY_ID}
aws_secret_access_key = ${AWS_SECRET_ACCESS_KEY}
EOL