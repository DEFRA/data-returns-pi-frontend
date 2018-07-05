FROM node:8-alpine

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY . /usr/src/app

# Create environment file
COPY .dockerenv /usr/src/app/.env

# Create public dir
RUN mkdir -p /usr/src/app/public/images
RUN chmod ugo+rwx /usr/src/app/public/images
RUN mkdir -p /usr/src/app/public/stylesheets
RUN chmod ugo+rwx /usr/src/app/public/stylesheets
RUN mkdir -p /usr/src/app/public/javascripts
RUN chmod ugo+rwx /usr/src/app/public/javascripts
RUN mkdir -p /usr/src/app/web/templates/govuk
RUN chmod ugo+rwx /usr/src/app/web/templates/govuk

# Create logs dir
RUN mkdir -p /usr/src/app/logs
RUN chmod ugo+rwx /usr/src/app/logs
VOLUME /usr/src/app/logs

EXPOSE 3000
CMD [ "node", "main.js" ]

USER node