const gulp = require("gulp")
const gutil = require("gulp-util")

const webpack = require("webpack")
const webpackStream = require("webpack-stream")
const webpackConfig = require("./webpack.config.js")

gulp.task(
    "default",
    ["html", "webpack"],
    function() {}
)

gulp.task("webpack", cb => {
    gulp.src("js/Main.js")
    .pipe(webpackStream(webpackConfig, webpack))
})

gulp.task("html", () =>
    gulp.src("view/**/*.html")
    .pipe(gulp.dest("dist/view"))
)
