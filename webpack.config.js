const defaultConfig = require('@wordpress/scripts/config/webpack.config');
const glob = require('glob');
const path = require('path');

module.exports = {
	...defaultConfig,

	// Remove this and use the src/index.js method if you want to bundle all blocks together.
	// See readme for details
	entry: glob.sync('./library/**/index.js').reduce((prev, dir) => {

		const folder = dir.replace('./library/', '').replace('/index.js', '');

		return {
			...prev,
			[folder]: path.resolve(__dirname, 'library/' + folder),
		};
	}, {}),
};
