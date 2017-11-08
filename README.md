# Tasukete - A helping hand
Tasukete was created from the need of having a centralized package with which I had SCSS mixins and functions at the ready.
Tasukete is loosly translated to"help".

This NPM Package is my first attempt to use NPM as a way to store my generalized code. Feel free to use and improve it. 

## Installation
---

To install this package, in your command line, simply type:
> npm install tasukete --save

This will install the package to your current project, under "dependencies".





## How to use
---

To use this package in your SCSS project, simply import the package in your SCSS files:
```SCSS
//SCSS
@import "tasuteke/tasukete";
```




If you are using gulp and gulp-sass, you need to include node_modules to your compilation for this to work. Otherwise, you will need to write the entire node_modules path.
```Javascript
//Gulpfile example of sass task
gulp.task("sass", function() {
    return gulp
        .src("path/to/your/sassfile.scss")
        .pipe(
            sass({
                includePaths: "node_modules",
                outputStyle: "compressed"
            }).on("error", sass.logError)
        )
        .pipe(autoprefixer({ browsers: ["last 2 versions", "ie >= 9"] }))
        .pipe(gulp.dest("path/to/your/destination"))
        .pipe(browsersync.reload({ stream: true }));
});
```




Now, you should be able to use my package and its awesome contents in your own project.


## I don't like your variables, how to override?
---

If you want to override my already awesome variables, with your own, presumably more awesome values, you can do it like this:
```SCSS
@import "path/to/your/variables/file";
@import "tasukete/tasukete";
@import "path/to/the/rest/of/your/files";
```



The way SCSS works is, when the variables has been initialized with a value, you can't override it. So if you add your variables first, to override mine, when the compiler gets to my variables, it will see the variables already exist, and skip it. That's more or less it.

This way, you can override my variables, with your own. **You need to call your variables the same as mine for it to work though.**


## How can I help?
---

If you want to help me develop this small library, you're welcome to fork my repo and make pull requests. Then I will check it out, and if you're lucky, the change will get added to the package a later date (≧▽≦)

You're also welcome to shoot me a mention on twitter if you've used my package. Any support is greatly appriciated.


## There are problems with your package - plzz fix!
---

If you notice bugs or issues with my package, you are more than welcome to shoot me a message and/or open an issue on the repository. I want it to be as bug-free as possible. Well, as bug-free a SCSS project can be.


## License
---




# Thanks
Thank you for your interest in this package. Even if you've just checked it out, it's greatly appriciated.
