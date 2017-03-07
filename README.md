# Url Shortener Code Test

We'd like you to create a URL shortening service.
- It should have a route where you can send a POST request with a URL in the
  body, which returns a short URL.

e.g.
```
curl localhost:4000 -XPOST -d '{ "url": "http://www.farmdrop.com" }'
{ "short_url": "/abc123", "url": "http://www.farmdrop.com" }
```


- When you send a GET request to a previously returned URL, it should redirect
  to the POSTed URL.

e.g.
```
curl -v localhost:4000/abc123
...
< HTTP/1.1 301 Moved Permanently
...
< Location: http://www.farmdrop.com
...
{ "url": "http://www.farmdrop.com" }
```


- We'd also like a simple frontend that can create and display shortened URLs
  without reloading the page.
- For simplicity, don't worry about persisting the URLs between restarts (ie,
  we don't need it to talk to an external database).

Use whatever languages and frameworks you are comfortable with. Don't worry
about getting the whole thing working flawlessly, this is more to see how you
structure a program. Please don't spend more than a few hours on it.

Bonus points:

- I often forget to type "http://" at the start of a URL. It would be nice if
  this was handled by the application (frontend or backend is up to you).
- We like to see how you approach the problem, so a few git commits with a
  clear message about what you're doing are better than one git commit with
  everything in it.
- We like tests. We don't expect a full test suite, but some tests would be
  nice to see. Its up to you whether thats integration, unit or some other
  level of testing.
- We'd be very happy to see a Dockerfile to run the project. This by no means a
  requirement, so don't go reading the Docker docs if you've never worked with
  it.

## Submission

Please clone this repository, write some code and update this README with a
guide of how to run it.

Either send us a link to the repository on somewhere like github or bitbucket
(bitbucket has free private repositories) or send us a git bundle.

    git bundle create name-url-shortener-test.bundle master

And send us the resulting `name-url-shortener-test.bundle` file.
