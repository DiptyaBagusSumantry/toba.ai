# Toba Landing Page Frontend

## Setup
Install package.json using 'npm'
```shell
npm i
```

## Running
You can change the backend url according to the running backend in the `.env` in the root frontend folder
```
VUE_APP_BACKEND_URL={backend url}
```

Run in local development
```shell
npm run serve
```

## Deploy
1. Build/re-build the docker-compose:

    ```shell
    docker-compose build
    ```
    Default NODE_ENV is production, so if you deploy this service in specific environment please add build argument (production, development or test) example:
    ```shell
    docker-compose build --build-arg STATE=development
    ```

2. Run the docker-compose:

    ```shell
    docker-compose up -d
    ```

    To stop the docker-compose use (you don't need to stop docker if you want to build the docker, you just have to build it and do docker up again):
    ```shell
    docker-compose down
    ```
    <small>Note: enter `docker container ps` to check container_id</small>