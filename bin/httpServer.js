//#!/usr/bin/env node

/**
 * Module dependencies.
 */

var debug = require('debug')('nenox-auth:server');
var http = require('http');
var server;

exports.setupHttpServer = function setupHttpServer(app) {
    /**
     * Get port from environment and store in Express.
     */
    var port = normalizePort(process.env.PORT || '3000');
    app.set('port', port);

    /**
     * Create HTTP server.
     */
    server = http.createServer(app);

    /**
     * Listen on provided port, on all network interfaces.
     */
    server.listen(port);
}

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}
