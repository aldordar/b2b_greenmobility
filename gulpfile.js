/**
 * This gulpfile consists of a number of task-sets, each for handling different parts of the 
 * development workflow. Each task-set will likely have several sub-tasks, being called
 * 
 * List of Task-sets:
 *      1. Compile
 *      2. Minify
 *      3. Collectstatic
 */
// Set these variables for your project
var project_settings = {
    development_url : 'localhost/b2b_greenmobility/dist',
    enable_browser_sync : false,          // For browsersync
    project_name: 'b2b_greenmobility',      // Ex. 4077-faxekondi
    project_type: 'html5/css3',
    version: '1.0',
    /**
     *  "root_dir_file_extensions" tells the sync-markup task which files are supposed to be synced from
     *  the root dir into dist. Any filetype not listed in the array will be ignored. It should not handle js, sass,
     *  images and fonts, since other tasks will take care of these filetypes.
     */
    root_dir_file_extensions: ['php', 'html', 'htm', 'ico', 'json', 'pdf'],
    project_directories: ['src/plugins', 'src/img', 'src/css', 'src/fonts', 'src/data']
};

// Define the required packages
var browserSync = require('browser-sync'),
    gulp        = require('gulp'),
    cleanCSS    = require('gulp-clean-css'),
    stylus      = require('gulp-stylus'),
    autoprefixer= require('gulp-autoprefixer'),
    sourcemaps  = require('gulp-sourcemaps'),
    concat      = require('gulp-concat'),
    minify      = require('gulp-minify'),
    htmlmin     = require('gulp-htmlmin'),
    rename      = require('gulp-rename'),
    del         = require('del'),
    zip         = require('gulp-zip'),
    gutil       = require('gulp-util'),
    plumber     = require('gulp-plumber'),
    wrap        = require('gulp-wrap'),
    imagemin    = require('gulp-imagemin'),
    jshint      = require('gulp-jshint');
    babel       = require('gulp-babel');

/**
 * Task: browser-sync
 * Will initialize server for browserSync, if enabled in settings above.
 */
gulp.task('browser-sync', function() {
    browserSync.init({
        proxy: {
            target: project_settings.development_url
        },
        reloadDelay: 300
    });
});
/**
 * Task to reload synced browsers (if active)
 */
gulp.task('browser-reload', function () {
    if(browserSync.active){
        browserSync.reload;
    }
    else{
        gutil.log("Browser-sync disabled in project settings");
    }
});

/**
 * Task Set: default (will run, when running "gulp")
 * This will:
 * Run the "watch" task
 * Run the "browser-sync" task
 */
//The default task will compile and watch
gulp.task('default', ['watch']);
// Will watch SCSS and JS files and compile them on change.
gulp.task('watch', ['compile'], function() {
    //We check that the project name has been changed. Remember to add browser-reload task to anything that can't be injected (php, html, images etc)
    if(project_settings.project_name){
        gulp.watch('src/stylus/**/*.styl', ['compile-stylus', 'prefix-css']);
        gulp.watch(['src/js/**/*.js', '!src/js/plugins', '!src/js/plugins/*.js'], ['compile-js']);
        project_settings.root_dir_file_extensions.forEach(function (file_extension) {
            gulp.watch('src/*.'+file_extension, ['collect-static', 'browser-reload']);
        });
        project_settings.project_directories.forEach(function (folder_name) {
            gutil.log(folder_name+'/**');
            gulp.watch(folder_name+'/**', ['collect-static', 'browser-reload']);
        });
        if(project_settings.enable_browser_sync){
            // initialize browser-sync if it is enabled in project-settings
            gulp.start('browser-sync');
        }
    }else{
        throw new gutil.PluginError({
            plugin: "watch",
            message: "You need to change the default project name."
        });
    }
});

gulp.task('check_settings', function (cb) {
    if(project_settings.project_name){
        return cb();
    }else {
        throw new gutil.PluginError({
            plugin: "build",
            message: "You need to change the default project name."
        });
    }
});

/**
 * BUILD
 *
 * This will:
 * Compile, minify and syncronize everything
 */
// Task for building project into deliverables for deployment or client
gulp.task('build', ['check_settings', 'compile', 'collect-static', 'minify'], function (cb) {
    return cb();
});

/**
 * CLEAN
 * Will delete dist folder
 */
gulp.task('clean', function () {
    del('dist/');
    del('project.zip');
});

/**
 * COMPRESS
 * This will:
 * Build project and add dist folder in a zip in the root called project.zip
 */
gulp.task('compress', ['build'], function () {
    return gulp.src('dist/**')
        .pipe(zip('project.zip'))
        .pipe(gulp.dest('./'));
});

/**
 * COMPILE
 *
 * Compiles js and stylus into dist folder and collect static-files such as html, images and fonts
 */
gulp.task('compile', ['compile-stylus', 'compile-js', 'collect-static']);

    /**
     * COMPILE STYLUS
     * Task wil compile stylus files into css and create sourcemaps and compress
     */
    gulp.task('compile-stylus', function() {
        return gulp.src([
            'src/stylus/main.styl'
        ])
            .pipe(plumber())
            .pipe(sourcemaps.init())
            .pipe(stylus())
            .pipe(autoprefixer({
                browsers: ['> 1%'],
                add: true,
                cascade: false
            }))
            .pipe(sourcemaps.write('.'))
            .pipe(gulp.dest('./dist/css'))
            .pipe(browserSync.stream());

    });

    /**
     * Gulp task to autoprefix all css
     */
    gulp.task('prefix-css', ['compile-stylus'], function () {
        return gulp.src([
            'dist/css/**/*.css'
        ])
            .pipe(autoprefixer({
                browsers: ['> 1%'],
                add: true,
                cascade: false
            }))
            .pipe(gulp.dest('dist/css/'))
    });

    /**
     * COMPILE JS
     *
     * This task will compile the javascript
     *
     * 1) Concat all our js files into one single js file.
     * 2) Wrap the file in a wrapper file (containing jQuery noConflict etc).
     * 3) Create a minification of the output
     */
    gulp.task('compile-js', function() {
        return gulp.src([
            'src/js/base/**/*.js',
            'src/js/modules/**/*.js',
            'src/js/*.js',
            '!src/js/base/wrapper.js'   // Exclude the wrapper, since we will use this to wrap the concatenated files
        ])
            .pipe(babel({
                presets: ['env']
            }))
            // .pipe(jshint())
            // .pipe(jshint.reporter('default'))
            //.pipe(sourcemaps.init()) //only if you want the map - this is not letting you know where the errors are
            .pipe(concat('scripts.js')) // Concat into 1 file
            .pipe(wrap({src: 'src/js/base/wrapper.js'}))    // Wrap the concatenation result in a wrapper
            .pipe(minify()) // Create a minified script
            //.pipe(sourcemaps.write('.')) //only if you want the map - this is not letting you know where the errors are
            .pipe(gulp.dest('dist/js'));  // Output result in js folder
    });
    /**
     * Collects files which are not pre-processed or compiled
     *
     * Task Set: collect static (will run, when running "gulp collect-static")
     * This will:
     * Collect all files from the src-root folder with the file-type as defined in project_settings.root_dir_file_extensions.
     * It will also copy over all in project_settings.project_directories without processing them. (they will still be minified later)
     */
    gulp.task('collect-static', function (cb) {
        project_settings.root_dir_file_extensions.forEach(function (file_extension) {
            gulp.src('src/*.'+file_extension)
                .pipe(gulp.dest('./dist'))
        });
        project_settings.project_directories.forEach(function (folder_name) {
            gulp.src(folder_name+'/**')
                .pipe(gulp.dest(folder_name.replace("src/", "dist/")));
        });
        return cb();
    });

/**
 * Task Set: Minify (will run, when running "gulp minify")
 *
 * This will:
 * Minify your code for production
 */
//Task to run the full task-set below
gulp.task('minify', ['minify-js', 'minify-css', 'minify-html', 'minify-img']);

    // Task to minify js files
    gulp.task('minify-js', ['collect-static'], function () {
        return gulp.src([
                'dist/js/*.js',
                '!dist/js/*-min.js'  // Exclude any minified scripts from task
            ])
            .pipe(minify()) // Create a minified script
            .pipe(rename('scripts.min.js'))
            .pipe(gulp.dest('dist/js'));  // Output result in js folder
    });
    //Task to minify html files
    gulp.task('minify-html', ['collect-static'], function() {
        return gulp.src('dist/*.html')
            .pipe(htmlmin({collapseWhitespace: true}))
            .pipe(gulp.dest('dist'))
    });
    // Task to minify images
    gulp.task('minify-img', ['collect-static'], function () {
        return gulp.src('./dist/img/*')
            .pipe(imagemin())
            .pipe(gulp.dest('./dist/img'));
    });
    // Task to minify css
    gulp.task('minify-css', ['compile-stylus', 'prefix-css'], function(){
        return gulp.src('dist/css/*.css')
            .pipe(cleanCSS({compatibility: 'ie8'}))
            .pipe(rename('main.min.css'))
            .pipe(gulp.dest('dist/css'));
    });
/**
 * SWALLOW ERROR function
 * This will allow the gulp not to stop runnign whenever an error is found.
 *
 * @param error
 */
function swallowError (error) {
    this.emit('end');
}