FROM node:8
RUN apt-get update \
	&& apt-get install -y python-pip libpython-dev curl\
	&& pip install awscli \
  && rm -rf /var/lib/apt/lists/*

WORKDIR /app


COPY frontend/package.json ./
COPY frontend/yarn.lock ./
RUN yarn install --ignore-engines

COPY frontend/ ./
