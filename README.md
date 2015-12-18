# Idenity

Static website compiler on NPM, Bower & Gulp.

I'm a year long on Gulp after a year on Grunt and always thinking with [DRY](http://www.wikiwand.com/en/Don't_repeat_yourself) and have a lot of ideas to share one build system core from one project to another. But I don't like any of build systems that already created by other developers because they don't love my stack. And here it is, finally. *Hope I will update and upgrade it with time.*

## Technologies using

### TL;DR

Already implemented:
- [NPM](http://npmjs.org), [Bower](http://bower.io), [Gulp](http://gulpjs.com/)
- [Sass](http://sass-lang.com), [PostCSS](https://github.com/postcss/postcss), [Jade](http://jade-lang.com)
- [Wiredep](https://github.com/taptapship/wiredep)
- [BrowserSync](http://browsersync.io)

Want to use:
- [Yeoman](http://yeoman.io/)
- [xip.io](http://xip.io) through [BrowserSync option](https://www.browsersync.io/docs/options/#option-xip) (maybe with additional task?)

### Build

- [NPM](http://npmjs.org) to install developer-time modules
- [Bower](http://bower.io) to install browser-land modules
	
	*Yes, it's alive for me because of [`main-bower-files`](http://github.com/ck86/main-bower-files) package (it's [trying to get NPM management](https://github.com/taptapship/wiredep/issues/173) but with no luck yet)*
- [Gulp](http://gulpjs.com/) to run tasks

### Compile

- [Sass](http://sass-lang.com) – CSS preprocessor
- [PostCSS](https://github.com/postcss/postcss) – CSS processors to make life easier, such as [Autoprefixer](https://github.com/postcss/autoprefixer) or [`postcss-short`](http://jonathantneal.github.io/postcss-short/)
- [Jade](http://jade-lang.com) – HTML (and any XML-syntax language) preprocessor that makes life easier with indented syntax and easy to use extensions like mixins and includes

### Maintain

- [Wiredep](https://github.com/taptapship/wiredep) for Sass and Jade to collect all your bundled dependencies from Bower **with the right order** based on dependencies tree
- [`gulp-inject`](https://github.com/klei/gulp-inject/) injects all bundled dependencies collected by Wiredep right into Jade templates and Sass stylesheets
- [`gulp-notify`](https://github.com/mikaelbr/gulp-notify) to let you know when you're doing something wrong
- [BrowserSync](http://browsersync.io) to launch local server on your machine and live update the pages when you edit them

#### Public tasks

Gulp tasks that makes all works for you.

- `_live` (used as `default` so you can just run `$ gulp` and work)
	- assemble project to fresh state
	- launch web server on defined port (check `path.json`)
- `_publish`
	- assemble project to fresh state
	- pack your ready-to-deploy package into zip file with project name

Other tasks is private because of they purpose is to debug and develop System. You can not use them if you are happy with out-of-the-box System state.

### Working

- Launch project with `gulp` and open `localhost:<port>` (`port` is defined in `path.json`)
- Work
- **Bundled dependencies installing** (like [jQuery](http://jquery.com)). If you want to add some library, do it with Bower
	
	For example, you can add [Zurb Foundation](http://foundation.zurb.com) with Terminal: `bower install --save foundation-sites`. All done, System will download it, inject into Jade and Sass all shipped dependencies and refresh the page in a browser.
	
	**Hint:** you can instal not only browser-land packages, but also Jade or Sass libraries like [Susy](`http://susy.oddbird.net`) or [`jade-field-mixins`](). They will be injected into right places with right order based on dependencies tree.
	
	If your installed dependency have wrong `main` section, you can fix it by yourself by adding `overrides` to your package `bower.json`:
	
	```json
	{
	  …
	  "dependencies": {
	    …
	    "package-with-wrong-main-section": "*"
	  },
	  "overrides": {
	    "package-with-wrong-main-section": {
	      "main": [
	        "files/*"
	      ]
	    }
	  }
	}
	```

- *Partials injection*. If your partials injection order is not important for you (if they are independent modules like mixins) you can use `templates`/`styles``/partials/modules/` folder inside to store them in. They will be injected into `partials/_injections``.sass`/`.jade` so you can use mixins, variables or anything defined inside your modules into other partials.
	
- If you want to deliver your project to a team member, you can use `publish` task to compile project and pack it into `zip` file. You will find it in `piblic/` folder named with your project name.
- If you want to deploy your project to remote server, *ask me to add `deploy` task.*

## TODO

- Fix source maps for stylesheets
- `deploy` task to publish and deliver files to remote server
	- [`vinyl-ftp`](https://github.com/morris/vinyl-ftp) to deploy to FTP
	- [`gulp-gh-pages`](https://github.com/shinnn/gulp-gh-pages) to deploy to Github Pages
	- Make a choice in Yeoman generator which of these to use
- [Yeoman](http://yeoman.io/) support to deliver System with handy generator that will ask you for new project name, port to launch local server and maybe some other things to customize
	
	Example CLI:
	
	- Project name
	- Port to use in local development
		- Random 4-digit
		
			*Range? From `0000` to `9999` or less?*
		
	- Customize some more fields from `path.json` maybe
	
- Better JS build flow? *[Babel](http://babeljs.io)? [Webpack](http://webpack.github.io)? I don't use JS too much to know.* 
- Example of use on a different branch
	- deploy it to Github Pages with [`gulp-gh-pages`](https://github.com/shinnn/gulp-gh-pages)

## For newbies in all these NPM-ish things

If you are not familiar with NPM, Node.js and other implemented base technologies, I'll try to help you with.

### Requirements

Install following tools to get it work:
- [Node.js](http://nodejs.org)
	- comes with [NPM](http://npmjs.org)
- [Bower](http://bower.io) – install globally with `npm install bower --global`

### Install

As usual with any NPM package:

```
npm install && bower install
```

You can take a cup of coffee before finish.

**Hint**

If you're on OS X you can add `&& say 'install complete` to the end of your installing commands to hear this words from speech generator when Terminal finished.