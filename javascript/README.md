# Test
Run the command
```npm test```
to test.

or build docker container with
```docker build -t js-test -f docker/Dockerfile .```
and then finally run it using
```docker run -p 8080:80 js-test```

Quick copy:
```
docker build -t js-test -f docker/Dockerfile .
docker run -p 8080:80 js-test
```
