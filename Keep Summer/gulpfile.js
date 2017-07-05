/* globals process */

const gulp = require('gulp');
const nodemon = require('gulp-nodemon');
const mocha = require('gulp-mocha');

// eslint-disable-next-line no-process-env
const port = process.env.PORT || 3001;

const app = require('./app');

gulp.task('server', () => {
    app.listen(`${port}`, () => console.log('Server listen on :3001'));
});

gulp.task('dev', ['server'], () => {
    return nodemon({
        script: 'app.js',
        ext: 'js',
        task: ['server'],
    });
});


// unit testing
// gulp.task('test:unit', () => {
//     gulp.src('./test/unit/**/*.js')
//         .pipe(mocha());
// });

// gulp.task('test', ['test:unit']);

// gulp.task('test-server:start', () => {
//     const portTest = parseInt(Math.random() * 3000 + 1000, 10);
//     const connectionStringTest = 'mongodb://items-db-test' + parseInt(Math.random() * 3000 + 1000, 10);
//     const appTest = require('./app');
//     appTest.listen(port);
// });


