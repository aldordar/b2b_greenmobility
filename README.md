HTML5-template with Stylus
========================

This is the standard HTML5-based with Stylus template for HTML24, which is to be used for every project.

To use this, simply fork this GitHub Repository to the wanted folder directory of the new project.

If you choose to download this template as a ZIP-file then we advise you to remember to delete unnecessary files such as .gitignore files.

Below is a description of this HTML5 template.

## Table of Contents


- [Installation](#installation)
- [Gulp](#gulp)
- [HTML](#html)
- [Javascript](#javascript)
- [Styles](#styles)
- [Gulp](#gulp)


INSTALLATION
----

Run the following commands for a proper installation:

1. $  npm install
	This will install all the packages needed for the template to run properly.

2. Open the gulpfile.js and change the name of the project at the beginning of the file.

3. $ gulp
	This will start running Gulp. So by Default, it will start running the [watch] task, so whenever a new change is made to any file it will automatically compile/sync it with a list folder that will be created also automatically.
[*] You can also run -    $ gulp build    - so it creates the dist folder with the basics compiled. 

HTML
----

### Title tag
Remember to change the title tag when you begin writing your HTML for a new project.

### Favicon
For every project we will make a favicon. There is already a reference to this favicon in the head of the HTML-file.
By default: src/img/favicon.ico


JAVASCRIPT
----------

We are using the javascript library jQuery as standard, and the newest will always be present in the template-files. In this template we've also chosen to use bootstrap.js .

### JS Folder
In this folder you’ll find the structure for the javascript of the project. Notice there are 2 folders: 
- BASE: contains the “wrapper.js” that we’ll use to wrap all the javascript files and where we declare the global object that we will use to store all our functions [*] . We also have the “events.js” where we’ll distribute our js functions based on the main window event fits better.  
- MODULES: will contain all the javascript functionalities. 

[*] The reason of this structure is so that one is able to use any function at any place. See the example included to check if we are running in a device.


STYLES
----------

In this template is used Stylus (http://stylus-lang.com/). There’s set a basic structure based on:
· base
· helpers
· modules

### Defined styles
- CSS Reset: In the beginning of the CSS-file there's a few lines of code for resetting the standard CSS. This is added to reduce browser inconsistencies in different stylings such as margins and paddings.
- FLOATING classes: We've added a `.clear` and a `.clearfix` class, which are both used for fixing float problems. 
- FONT-FACE: example of how to import an external font with Stylus. For more info: http://stylus-lang.com/docs/font-face.html


GULP
----

Below we list the set of tasks this gulpfile handles and how they work. The overall idea of this gulpfile is that we seperate the source from deliverables. This means that all coding will be done in the src folder, while all compiling and previewing is done in the dist folder. This should make it easy to deploy, minify and deliver for clients.

### Default
The default task runs [watch].
 
### Default
The watch task runs the task [compile] and looks at all the files and runs the proper task to compile only the modified format of files. 

### Compile
The compile task calls 3 different tasks: compile-js, compile-stylus and collect-static. The compile task is what takes your source and compiles it into a deliverable folder (dist/).

#### Compile-js
Compile js will take all your javascript files and concatenate them into one file in "dist/js". The task does not minify - this is handled by the minify-tasks (read below)

#### Compile-styluss
Compile stylus will take all your stylus files and concatenate them into one file in "dist/css”. The task does not minify - this is handled by the minify-tasks (read below)

#### Collect Static
Some project files does not need compiling (images, fonts, html, etc). The collect-static task will find all static files in the root-folder (src/) and synchronize that to the dist folder. The sub-tasks of collect static is described below.

##### Sync-fonts
This task will synchronize all files from src/fonts/ to dist/fonts.

##### Sync-images
This task will synchronize all files from src/img/ to dist/img/. It also minifies them if possible by using “imagemin”.

##### Sync-markup
This task will synchronize all html and htm files from src/ to dist/.

### Minify
The minify task will minify and optimize all files in the dist folder. It does not touch the src folder.

#### Minify-js
This task will minify the javascript in dist/js in new files (with -min appended to its name)

#### Minify-css
This task will minify the css in dist/css in new files (with -min appended to its name)

#### Minify-html
This task will minify the html files in dist/ in new files. It will overwrite the unminified versions with a minified one. To go back to unminified html run [compile](#compile)

#### Minify-img
This task will optimize all images in dist/img.

### Build
This task is intended to be run by build-servers or manually when you want to deploy or deliver the project for clients. It calls the following task-sets:

- [Compile](#compile)
- [Collect-static](#collect-static)
- [Minify](minify)

### Browser-sync
This tasks syncs the browser with the code every time there’s a change.