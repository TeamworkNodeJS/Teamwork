/* globals process */

const gulp = require('gulp');
const nodemon = require('gulp-nodemon');
const morgan = require('morgan');

// eslint-disable-next-line no-process-env
const port = process.env.PORT || 3002;

gulp.task('server', () => {
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use('/static', express.static('public'));
app.use('/libs', express.static('node_modules'));
app.use(morgan('conbine'));

app.set('view engine', 'pug');

require('./server/routes/server-routes')(app);
require('./server/routes/auth-routers')(app);

app.listen(`${port}`, () => console.log('Server listen on :3002'));
});

gulp.task('dev', () => {
    return nodemon({
        script: 'index.js',
        ext: 'js',
        task: ['server'],
    });
});
