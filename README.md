# backend-interview-js

This is a starter kit for a back-end interview in JavaScript.

## Setup

Make sure you have the following global dependencies installed:

- NodeJS
- Docker

Clone this repository, and run the following command to install the required dependencies:

```bash
$ npm install
```

## Run the application

To run the application, run the following command:

```bash
$ npm run start
```

As long as the application is running, it will reload itself whenever code changes.

## Development

An instance of Express.js has been set up for you in `app.js`. Use this as your starting point for development.

## Requirements

The requirements given to you are in the MoSCoW format: **M**ust have, **S**hould have, **C**ould have, **W**ould have. 

If it isn't obvious yet: **Must haves** are the most important requirements. The **Extra mile** objectives are nice to have if you have time left or are looking for a challenge.

### Must have

- [ ] Set up **Create, Read, Update** and **Delete** routes for a Todo-list using `express`.
- [ ] An item in the Todo-list needs to have the following properties: **id (int, primary key), name (string), completed_at (timestamp)**
- [ ] Routes need to implement the correct **RESTful HTTP methods** and **status codes**.

### Should have
- [ ] Move the Todo-list CRUD routes into their own, separate **Controller**.
- [ ] Use the `sequelize` npm package to define a Todo data **Model**.
- [ ] Use the `sequelize` npm package to store data in a MySQLite database in a persistent manner (e.g. not an in-memory database).

### Could have
- [ ] Create a `docker-compose.yml` file for the project and run the application from inside a Docker container.
- [ ] Add a MySQL container to your `docker-compose.yml` and configure the ORM to use the MySQL server running in the Docker container.

### Would have
- [ ] Write an **integration test** using a unit testing framework (we recommend [Jest](https://jestjs.io/) if you are unsure which one to use) testing the **Create, Read, Update** and **Delete** API calls.

### Extra mile
- [ ] Create a **new Git repository** and instantiate a new [Nest](https://docs.nestjs.com/) project.
- [ ] Implement the same Todo functionality using `Nest` framework instead of Express and the `typeorm` npm package instead of `sequelize`.

## Any questions?

Send me a message, and I'll reply as quickly as possible.