# Memcached Cloud Node.js Sample

A Node.js sample, running on Express framework, demonstrating how [Memcached](http://memcached.org/) can be used at Heroku.<br />
SET, GET and DELETE a key, and get your bucket's STATS.

The app is currently running at: [memcachedcloud-node-sample.herokuapp.com](http://memcachedcloud-node-sample.herokuapp.com), and uses [Memcached Cloud](https://addons.heroku.com/memcachedcloud) as a backend.

## Deploy to Heroku

Instantly deploy it to Heroku:

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy?template=https://github.com/RedisLabs/memcachedcloud-node-sample)

## Docker

The app can be run and tested using the [Heroku Docker CLI plugin](https://devcenter.heroku.com/articles/introduction-local-development-with-docker).

Make sure the plugin is installed:

    heroku plugins:install heroku-docker

Configure Docker and Docker Compose:

    heroku docker:init

And run the app locally:

    docker-compose up web

The app will now be available on the Docker daemon IP on port 8080.

You can also use Docker to release to Heroku:

    heroku create
    heroku docker:release
    heroku open
