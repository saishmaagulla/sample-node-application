FROM ubuntu:14.04
RUN apt-get update && apt-get install --yes curl
RUN curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
RUN apt-get install --yes nodejs
RUN apt-get install git -y
RUN git clone https://github.com/rohith-vallabhaneni/sample-node-application.git
ENV PORT 30001
ENV ADDRESS 0.0.0.0
WORKDIR /sample-node-application
RUN rm -rf node_modules && npm install
CMD npm start
