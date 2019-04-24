/**
 * Require the Express.js framework.
 *
 * @type {any}
 */
const express = require('express');

/**
 * The Express.js instance.
 *
 * @type {Express}
 */
const app = express();

/**
 * Port on which to listen for connections.
 *
 * @type {number}
 */
const port = 3000;

/**
 * Listen on the configured port for any requests.
 */
app.listen(port, () =>
  console.log(`backend-interview-js is listening on port ${port}...`)
);

/**
 * Reply with a 'Hello World!' message to a GET / request.
 */
app.get('/', (req, res) => res.send('Hello World!'));
