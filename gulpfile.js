const gulp = require("gulp");
const sass = require("gulp-sass");
const ap = require("gulp-autoprefixer");
const bs = require("browser-sync").create();
const clean = require("gulp-clean");

const scssUrl = {
    scssInput: "scss/tasukete.scss",
    scssOutput: "dist/css"
};

//#region SASS
// used for compiling our own SCSS
gulp.task("sass", function() {
    return gulp
        .src(scssUrl.scssInput)
        .pipe(
            sass({
                includePaths: "node_modules",
                outputStyle: "compressed"
            }).on("error", sass.logError)
        )
        .pipe(ap({ browsers: ["last 2 versions", "ie >= 9"] }))
        .pipe(gulp.dest(scssUrl.scssOutput))
        .pipe(bs.reload({ stream: true }));
});

// used for deleting the old, "cached" version of the output css
gulp.task("sass-clean", function() {
    return gulp.src(scssUrl.scssOutput + "/tasukete.css").pipe(clean());
});

// used for watching our own scss for compilation
gulp.task("sass-watch", ["sass-clean", "sass"], function() {
    gulp.watch(["scss/**/*"], ["sass-clean", "sass"]);
});
//#endregion
