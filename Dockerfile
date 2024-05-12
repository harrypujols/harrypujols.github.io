FROM ruby:2.7
WORKDIR /usr/src/app
ADD . /usr/src/app/
EXPOSE 4000
RUN bundle install
