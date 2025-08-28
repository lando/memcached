---
title: Memcached Lando Plugin
description: Add a highly configurable memcached service to Lando for local development with all the power of Docker and Docker Compose.
next: ./config.html
---

# Memcached

[Memcached](https://memcached.org/) is an in-memory key-value store for small chunks of arbitrary data (strings, objects) from results of database calls, API calls, or page rendering.

You can easily add it to your Lando app by adding an entry to the [services](https://docs.lando.dev/services/lando-3.html) top-level config in your [Landofile](https://docs.lando.dev/landofile/).

```yaml
services:
  myservice:
    type: memcached:1
```

## Supported versions

*   [1](https://hub.docker.com/r/bitnamilegacy/memcached)
*   [1.6](https://hub.docker.com/r/bitnamilegacy/memcached)
*   [1.5](https://hub.docker.com/r/bitnamilegacy/memcached)
*   [custom](https://docs.lando.dev/services/lando-3.html#overrides)

## Patch versions

::: warning Not officially supported!
While we allow users to specify patch versions for this service they are not *officially* supported so if you use one, YMMV.
:::

To use a patch version, you can do something as shown below:

```yaml
services:
  myservice:
    type: memcached:1.6.38
```

But make sure you use one of the available [patch tags](https://hub.docker.com/r/bitnamilegacy/memcached/tags) for the underlying image we are using.

