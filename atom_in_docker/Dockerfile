FROM ubuntu:18.04

RUN apt-get update -y
RUN apt-get install -y software-properties-common apt-transport-https wget plantuml ca-certificates
RUN wget -O - https://packagecloud.io/AtomEditor/atom/gpgkey | apt-key add -
RUN add-apt-repository "deb [arch=amd64] https://packagecloud.io/AtomEditor/atom/any/ any main"
RUN apt-get install -y atom
RUN apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_12.x | /bin/bash -
RUN apt-get install -y nodejs
RUN npm install puppeteer --unsafe-perm=true --allow-root
RUN apt-get install libgbm-dev
# RUN apm install markdown-preview-enhanced
