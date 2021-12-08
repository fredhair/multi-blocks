const defaultConfig = require('@wordpress/scripts/config/webpack.config');
const glob = require('glob');
const path = require('path');

module.exports = {
	...defaultConfig,

	// Remove this and use the src/index.js method if you want to bundle all blocks together.
	// Ensure you have a src/index.js in the root folder and uncomment the last line from create-block.js
	entry: glob.sync('./library/**/index.js').reduce((prev, dir) => {

		const folder = dir.replace('./library/', '').replace('/index.js', '');

		return {
			...prev,
			[folder]: path.resolve(__dirname, 'library/' + folder),
		};
	}, {}),
};
