# Url Shortener Code Test

## Introduction

This projects demos a URL Shortener service using Ruby/Sinatra as the back-end and Reac.js/Redux as the front-end. This is a single-page application that reacts to actions performed by the user and keeps an internal state on both back-end and front-end.

On the back-end I decided to use Sinatra to serve as an API to the front-end. In the Ruby world, this tech has been proved to be ideal for when a scalable and light-weight API is needed on comparison to Ruby on Rails and others. I also decided to use SQLLite as a persistence database, only for simplicity reasons. Ideally this project should use a mix of PostgreSQL and Redis to store and cache data. As for testing, I’ve used Rspec to code integration tests using the API endpoints.

The front-end uses React.js as the UI library and Redux as the internal state management system. Testing it’s performed using Jest and Enzyme to achieve a DSL similar to Rspec.

Hence, we obtain a real-world application capable of scaling on different ends. One caveat with this app, it’s that all links are public. Since we don’t have user accounts, once a short link it’s created, no other person can create a second one that points to the same URL. Thus, all short links are static and global.

## Configure

### API

1. Open the `/api` folder and execute:

```bash
rake db:reset
```

2. Start the Thin web server with:

```bash
rackup
```

### Front-end

1. Navigate to `/frontend` and execute:

```bash
brew install yarn
yarn install
yarn start
```

2. Open `http://localhost:8080/` in your browser
