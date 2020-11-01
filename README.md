# Home automation server
Backend/server for the home automation project. All the work are maintained in [Trello](https://trello.com/b/acWDFLf5/home-automation-and-spying-on-my-plant)

## Local setup
There are couple of things needed to be setup before running the server locally.

### Prerequisites
- Node.js v12 LTS
- Postgresql
- Redis
- Docker

### Steps
- Clone the repository
- Install dependencies
- Set values for `POSTGRES_USER` and `POSTGRES_PASSWORD` in `database.env`
- Set `TOKEN_SECRET` in `development.env`
- Generate self-signed TLS certificate and key. Eg. `openssl req -nodes -new -x509 -keyout server.key -out server.cert`
- Build docker image for server `make buildServer`
- Run the server by `make devServerUp` or from VSCode run task `Start dev`

### Tips & Tricks
- For database migrations/seeds, either
  - Do it while the server initiates
    - Start the server by uncommenting `yarn dbMigrateAll`/`yarn dbSeedAll`, Only once, in `entrypoint.sh`
    - Okay to comment it out afterwards
  - Do it in the running container
    - SSH to the server container `docker exec -it <container id/name> /bin/sh` or `make sshToDev destination=target_container` Put appropriate value for `target_container` one of `server`, `redis` and `db`
    - Run `yarn dbMigrateAll`/`yarn dbSeedAll`
- For debugging with VSCode, after the containers are running, click `Debug: HA Dev server` and the debugger should attach
- It is better to untrack a file when local specific change has been made, to avoid mistakenly commit. Eg. `git update-index --assume-unchanged database.env`
- To see data from postgres database,
  - Run `yarn console`
    - Run using env variables with proper value while running the command
    - `DB_HOST=localhost POSTGRES_DB=home_automation_dev POSTGRES_USER= POSTGRES_PASSWORD= ./node_modules/.bin/babel-node --experimental-repl-await ./console` <- provide appropriate/dev server usage values to `POSTGRES_USER` and `POSTGRES_PASSWORD`
    - Type `.help` to see available command aliases
    - Run any `sequelize` query. Make sure to wrap the query with `printResult` Eg. `printResult(await user.findAll())`
    - The aim is have rails like experience to see data. WIP

 ## Attributes
 - Powered by `express`
 - Designed close to MC
 - Password is hashed using `bcrypt`
 - Cache against a specific url is stored in redis, makes use of `node-redis` `cacheMiddleware.js`
 - Token generated using `jsonwebtoken` and stored in db. Token refresh only renews
 - Every end-point except `/login` is protected with token authentication `tokenMiddleware.js`
 - Socket for real-time update between iot devices, server and clients. Makes use of `socket.io`
 - Data stored in postgresql
 - Database models, migrations, seeding and operations are handled with `sequelize`
 - Flexible logging
   - Different level of log control is possible
   - `DEBUG` env variable holds the value of which levels to show
   - Using right values, debug/prod logs can be narrowed down to context
 - Secured
   - Makes use of `helmet`
   - Rate limiter using `rate-limiter-flexible`
   - HTTPS. Self signed TLS certificate for development

 ## End-points
 - /api
   - /v1
	    - /users
    		- /signUp (post)
		    - /logIn (post)
		    - /:userId (put)
		    - /:userId (delete)
	    - /hubs
		    - / (get)
		    - / (post)
		    - /:hubId (put)
		    - /:hubId (delete)
      - /categories
        - / (get)
      - /roles
        - / (get)
      - /boards
        - / (get)
        - / (post)
        - /:boardId (put)
        - /:boardId (delete)
      - /devices
        - / (get)
        - / (post)
        - /:deviceId (put)
        - /:deviceId (delete)
      - /deviceData
        - / (get)
        - /role/:roleId (get)
        - /category/:categoryId (get)
      - /hubProfiles
        - / (get)
        - / (post)
        - /:hubProfileId (put)
        - /:hubProfileId (delete)
