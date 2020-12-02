// MAIN MODULE!

/*
 * const path = require('path');
 * var pathObj = path.parse(__filename);
 * console.log(pathObj);
 */

/*
 * const os = require('os');
 * var totalMemory = os.totalmem();
 * var freeMemory = os.freemem();
 * console.log(`Total Memory: ${totalMemory}`);
 * console.log(`Free Memory: ${freeMemory}`);
 */

/*
 * const fs = require('fs');
 * const files = fs.readdirSync('./');
 * fs.readdir('$', function(err, files){
 *   if (err) console.log('Error', err);
 *   else console.log('Result', files);
 * });
 */

/*
 * const EventEmitter = require('events');  // Capitalision since class
 *
 * const Logger = require('./logger')
 * const logger = new Logger();
 *
 * // Register a listener
 * logger.addListener('logging', (arg) => {
 *   console.log(`Logging message: ${arg.message}`)
 * })
 * logger.on('messageLogged', (arg) => { // Also emitter.addListener, => same as fn
 *    console.log('Message logged:', arg)
 * })
 *
 * logger.log('message')
 */

const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write('Hello world');
    res.end();
  }

  if (req.url === '/yo'){
    res.write(JSON.stringify([1, 2, 3, 4]));
    res.end()
  }
});

server.listen(3000);

console.log('Listening on port 3000...');
