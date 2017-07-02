/* globals process */

const gulp = require('gulp');
const nodemon = require('gulp-nodemon');

// eslint-disable-next-line no-process-env
const port = process.env.PORT || 3002;

const app = require('./app');

gulp.task('server', () => {
    app.listen(`${port}`, () => console.log('Server listen on :3002'));
});

gulp.task('dev', ['server'], () => {
    return nodemon({
        script: 'app.js',
        ext: 'js',
        task: ['server'],
    });
});
