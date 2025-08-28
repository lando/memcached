# Memcached Example

This example exists primarily to test the following documentation:

* [Memcached Service](https://docs.devwithlando.io/tutorials/memcached.html)

## Start up tests

Run the following commands to get up and running with this example.

```bash
# Should start up successfully
lando poweroff
lando start
```

## Verification commands

Run the following commands to validate things are rolling as they should.

```bash
# Should use the user specified version if given
lando exec custom -- memcached --version | grep 1.5.22

# Should set the user specified cache size if given
lando exec custom -- env | grep MEMCACHED_CACHE_SIZE=256
docker top landomemcached_custom_1 | grep "memcached -p 11211" | grep "256"
```

## Destroy tests

Run the following commands to trash this app like nothing ever happened.

```bash
# Should be destroyed with success
lando destroy -y
lando poweroff
```
