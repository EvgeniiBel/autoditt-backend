import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import linkRoutes from './api/routes/linksRoutes';
import commentsRoutes from './api/routes/commentsRoutes';

const app = express();
const port = process.env.PORT || 3001;

//routes
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

linkRoutes(app); //register the links route
commentsRoutes(app); //register the comments route

app.listen(port);

console.log('Autoditt RESTful API server started on: ' + port);