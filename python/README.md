# Test
## Running with Python 3
To run as normal in terminal, you can execute the command:
```python3 -m unittest tests/test_account.py```

## Running with Docker
To run the tests using docker, you can run the commands:
```
docker build -t python-test -f docker/Dockerfile .
docker run --rm python-test
```

This will build a docker container,and run all of your tests without having to download Python, or it's dependencies.