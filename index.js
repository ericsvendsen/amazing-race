var Path = require('path');
var Hapi = require('hapi');

// Create a server with a host and port
var server = new Hapi.Server();

server.register([require('vision'), require('inert')], function (err) {
    server.views({
        engines: {
            html: require('handlebars')
        },
        relativeTo: __dirname,
        path: 'templates'
    });
});

server.connection({
    host: 'localhost',
    port: 3000
});

server.route({
    method: 'GET',
    path: '/',
    handler: {
        view: 'index'
    }
});

server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
        directory: {
            path: 'client'
        }
    }
});

// Start the server
server.start(function () {
    console.log('Server running at: ', server.info.uri);
});