const config = require('../gulp-config.js')
module.exports = {
	sass: {
		output: 'nested'
	},
	postcss: [
		require('autoprefixer'),
		require('postcss-assets')({
			loadPaths: [config.serve]
		}),
		require('postcss-axis'),
		require('postcss-short'),
		require('postcss-import'),
		require('postcss-copy')({
			src: ['/node_modules'],
			dest: config.serve,
			relativePath(dirname, fileMeta, result, opts) {
				return opts.dest
			},
			template(fileMeta) {
				return config.stylesAssetsFolder + fileMeta.name + '.' + fileMeta.ext
			}
		}),
	]
}
