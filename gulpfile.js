const gulp = require('gulp');
const del = require('del');
const sass = require('gulp-sass');
const connect = require('gulp-connect');
const rollup = require('rollup').rollup;
const sourcemaps = require('gulp-sourcemaps');
const nodeResolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');

gulp.task('clean', () => {
    return del([
        'dist/**/*',
    ]);
});

gulp.task('script', () => {
    return rollup({
        entry: 'src/main.js',
        sourceMap: true,
        plugins: [
            nodeResolve(),
            commonjs(),
        ],
    })
        .then((bundle) => {
            return bundle.write({
                format: 'iife',
                dest: 'build/main.js'
            });
        })
        .then(() => connect.reload());
});

gulp.task('sass', () => {
    return gulp.src('src/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('build'))
        .pipe(connect.reload());
});

gulp.task('static', () => {
    return gulp.src('static/**/*')
        .pipe(gulp.dest('build'))
        .pipe(connect.reload());
});

gulp.task('html', () => {
    return gulp.src('src/**/*.tpl.html')
        .pipe(gulp.dest('build'))
        .pipe(connect.reload());
});

gulp.task('build', gulp.parallel('script', 'sass', 'static', 'html'));

gulp.task('serve', () => {
    return connect.server({
        root: 'build',
        port: 8000,
        livereload: true,
    });
});

gulp.task('watch', () => {
    gulp.watch([
        'src/**/*.scss',
    ], gulp.parallel('sass'));

    gulp.watch([
        'static/**/*',
    ], gulp.parallel('static'));

    gulp.watch([
        'src/**/*.js',
    ], gulp.parallel('script'));

    gulp.watch([
        'src/**/*.tpl.html',
    ], gulp.parallel('html'));
});

gulp.task('dev', gulp.parallel('build', 'serve', 'watch'));
