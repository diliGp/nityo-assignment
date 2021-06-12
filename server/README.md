# Getting Started with Node Js APP

## Pre-requisites:

To run application please follow the below instructions:

- Install `mariadb`.
- Create a database.
- Create a `.env` file just in parallel of `.env.example`.
- Copy all the environment variables from `.env.example` to `.env` file.

## Run the following scripts respectively:

### `npx sequelize-cli db:migrate`

Runs the migration to create necessary tables into database.
Please make sure the database connectivity is done properly as mentioned in `Pre-requisites` steps.

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3400](http://localhost:3400) to use the APIs directly.

## Important for testing:

- After the server is up and running, please comment the authentication middleware and if condition in `create` function controller in file `server/controllers/Users.js` line number: `47 to 50`. Which will remove the authentication check.
- Now call [http://localhost:3400/users](http://localhost:3400/users) as `POST` methods in POSTMAN or any other API clients. And provide the user details to create a user.
- Once the user is created, please revert the commented authentication checks.

## `Now you're ready to test the application properly.`

- Singing in will give you authentication token. Please use the token in each API.
