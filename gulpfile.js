"use strict";

const gulp = require("gulp");
const sourcemap = require("gulp-sourcemaps");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const server = require("browser-sync").create();
const csso = require("gulp-csso");
const rename = require("gulp-rename");
const del = require("del");
const htmlmin = require("gulp-htmlmin");
const webpackStream = require("webpack-stream");
const webpackConfig = require("./webpack.config.js");
const importCss = require('gulp-import-css');
const concat = require('gulp-concat');
const include = require('gulp-file-include');
const named = require('vinyl-named');

const plugins = [
    'node_modules/swiper/swiper.min.css',
    'node_modules/swiper/modules/scrollbar/scrollbar.min.css',
    'node_modules/accordion-js/dist/accordion.min.css'
];

gulp.task("css", () => {
    return gulp.src("source/css/style.css")
        .pipe(sourcemap.init())
        .pipe(importCss())
        .pipe(postcss([
            autoprefixer()
        ]))
        .pipe(csso())
        .pipe(rename("style.min.css"))
        .pipe(sourcemap.write("."))
        .pipe(gulp.dest("build/css"))
        .pipe(server.stream());
});

gulp.task("css:libs", () => {
    if (plugins.length > 0) {
        return gulp.src(plugins)
            .pipe(concat('libs.min.css'))
            .pipe(gulp.dest('build/css/'))
    }
});

gulp.task("html", () => {
    return gulp.src("source/*.html")
        .pipe(include())
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest("build"));
});

gulp.task("js", () => {
    return gulp.src(['./source/js/index.js', './source/js/catalog.js'])
        .pipe(named())
        .pipe(webpackStream(webpackConfig))
        .pipe(gulp.dest("./build/js"));
});

gulp.task("server", () => {
    server.init({
        server: "build/",
        notify: false,
        open: true,
        cors: true,
        ui: false
    });

    gulp.watch("source/css/**/*.css", gulp.series("css"));
    gulp.watch("source/img/*.svg", gulp.series("build", "refresh"));
    gulp.watch("source/js/**/*.js", gulp.series("build", "refresh"));
    gulp.watch("source/*.html", gulp.series("build", "refresh"));
});

gulp.task("copy", () => {
    return gulp.src([
        "source/fonts/**/*.{woff,woff2}",
        "source/img/**"
    ], {
        base: "source"
    })
        .pipe(gulp.dest("build"));
});

gulp.task("clean", () => {
    return del("build");
});

gulp.task("refresh", (done) => {
    server.reload();
    done();
});


gulp.task("build", gulp.series("clean", "copy", "html", "css", "css:libs", "js"));
gulp.task("start", gulp.series("build", "server"));
