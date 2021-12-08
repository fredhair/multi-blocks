const fs = require('fs');
const path = require('path');
const { argv, exit } = require('process');

//Do some proper error handling here
const blockName = argv[2] || exit(1);

const rootPath = path.resolve(__dirname);
const libraryPath = path.resolve(__dirname, 'library');
const srcPath = path.resolve(__dirname, 'src');

const blockPath = path.resolve(libraryPath, blockName);

fs.mkdir(blockPath, error => {
	error && exit(2);
});
