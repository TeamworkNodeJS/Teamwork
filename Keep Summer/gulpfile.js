const gulp = require('gulp');

const mocha = require('gulp-mocha');

// const nodemon = require('gulp-nodemon');

const eslint = require('gulp-eslint');

gulp.task('run', () => {
    require('./server');
});

gulp.task('lint', () => {
    return gulp.src(['./app/**/*.js'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});


// // nodemon
// gulp.task('dev', ['run'], () => {
//     return nodemon({
//         script: 'server.js',
//         ext: 'js',
//         task: ['run'],
//     });
// });


// // unit testing
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


