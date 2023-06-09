FROM node:19
MAINTAINER Hyunjun Park <hyunjun1325@icloud.com>
WORKDIR /home/node

# ADD ./index.js /home/node
# ADD ./package* /home/node
COPY public /home/node/public
COPY src /home/node/src

ADD babel.config.js /home/node
ADD jsconfig.json /home/node
ADD package-lock.json /home/node
ADD package.json /home/node
ADD postcss.config.js /home/node
ADD tailwind.config.js /home/node
ADD vue.config.js /home/node
ADD yarn.lock /home/node

RUN npm install 
# CMD ["node", "index.js"]
CMD ["npm", "run", "serve"]