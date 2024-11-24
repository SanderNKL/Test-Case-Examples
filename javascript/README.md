# Test
## Running with Node
To run as normal in terminal, you can execute the command:
```npm test```

## Running with Docker
To run the tests using docker, you can run the commands:
```
docker build -t js-test -f docker/Dockerfile .
docker run -p 8080:80 js-test
```

This will build a docker container,and run all of your tests without having to download Node, or any of the projects dependencies.