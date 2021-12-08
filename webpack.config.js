const defaultConfig = require('@wordpress/scripts/config/webpack.config');
// Create a dictionary ['name': 'path'] of all blocks as necessary as part of build
// const allBlocks = require('./library/all-blocks.json');

module.exports = {
	...defaultConfig,
	// Use this if you need multiple entry points (creates independent source files for each block)
	// entry: {
	// 	'example-block': './library/example-block',
	// },
};
