# Getting Started with Node Js APP

## Pre-requisites:

To run application please follow the below instructions:

- Install `mariadb`.
- Create a database.
- Create a `.env` file just in parallel of `.env.example`.
- Copy all the environment variables from `.env.example` to `.env` file.
- Provide the correct values to `.env` variables as shown below in screenshot.
![image](https://user-images.githubusercontent.com/41067948/121776983-75bc7d80-cbad-11eb-9e26-17043cc27ed4.png)



## Run the following scripts respectively:

### `npx sequelize-cli db:migrate`

Runs the migration to create necessary tables into database.
Please make sure the database connectivity is done properly as mentioned in `Pre-requisites` steps.

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3400](http://localhost:3400) to use the APIs directly.

## Important for testing:

- After the server is up and running, please comment the authentication middleware and if condition in `create` function controller in file `server/controllers/Users.js` line number: `47 to 50`. Which will remove the authentication check. Like shown below in the screenshots.
![image](https://user-images.githubusercontent.com/41067948/121776916-13637d00-cbad-11eb-8218-b41c3ac8f5ed.png)
![image](https://user-images.githubusercontent.com/41067948/121776937-355cff80-cbad-11eb-9ffc-4605c83f285a.png)

- Now call [http://localhost:3400/users](http://localhost:3400/users) as `POST` methods in POSTMAN or any other API clients. And provide the user details to create a user.
- Once the user is created, please revert the commented authentication checks.

## `Now you're ready to test the application properly.`

- Singing in will give you authentication token. Please use the token in each API.
