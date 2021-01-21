/*
    Import necessary modules
*/
import * as httpServer from '../bin/httpServer';
import * as express from 'express';
import * as cookieParser from 'cookie-parser';
import compression from 'compression';
import sirv from 'sirv';
import * as sapper from '@sapper/server';

/*
    Load the port and the node environment from the .env file
 */
const {PORT, NODE_ENV} = process.env;
const dev = NODE_ENV === 'development';

/*
    Instantiate the express app.
 */
const app = express();

/*
    Express specific middlewares
 */
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

/*
    Sapper specific middlewares
 */
app.use(sirv('static', {dev}));
app.use(compression({threshold: 0}));
app.use(sapper.middleware());

/*
    Start the http server for the app
 */
httpServer.setupHttpServer(app);
