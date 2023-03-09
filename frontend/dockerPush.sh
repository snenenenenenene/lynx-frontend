#!/bin/sh

imageTag="snenenenene/lynx-frontend:latest"
docker build -t ${imageTag} . && docker push ${imageTag}
