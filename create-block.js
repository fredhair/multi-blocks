const fs = require('fs');
const path = require('path');
const { argv, exit } = require('process');

//Do some proper error handling here
const blockName = argv[2] || exit(1);

const rootPath = path.resolve(__dirname);
const libraryPath = path.resolve(__dirname, 'library');
const srcPath = path.resolve(__dirname, 'src');
const templatePath = path.resolve(__dirname, 'templates');

const blockPath = path.resolve(libraryPath, blockName);

const blockFiles = {
	json: 'block.json',
	edit: 'edit.js',
	editor: 'editor.scss',
	index: 'index.js',
	save: 'save.js',
	style: 'style.scss',
};

// Please note this is a fairly dangerous function and open to XSS,
// please be sure your template files & variables haven't been compromised!
const interpolateBuffer = (buffer, args) => {
	const names = Object.keys(args);
	const vals = Object.values(args);
	return new Function(...names, `return \`${buffer}\`;`)(...vals);
}

fs.mkdirSync(blockPath);

// block.json
var buffer = fs.readFileSync(path.resolve(templatePath, blockFiles.json));
fs.writeFileSync(path.resolve(blockPath, blockFiles.json), interpolateBuffer(buffer, { blockName }));

// edit.js
buffer = fs.readFileSync(path.resolve(templatePath, blockFiles.edit));
fs.writeFileSync(path.resolve(blockPath, blockFiles.edit), interpolateBuffer(buffer, { blockName }));

// editor.scss
buffer = fs.readFileSync(path.resolve(templatePath, blockFiles.editor));
fs.writeFileSync(path.resolve(blockPath, blockFiles.editor), interpolateBuffer(buffer, { blockName }));

// index.js
buffer = fs.copyFileSync(path.resolve(templatePath, blockFiles.index), path.resolve(blockPath, blockFiles.index));

// save.js
buffer = fs.readFileSync(path.resolve(templatePath, blockFiles.save));
fs.writeFileSync(path.resolve(blockPath, blockFiles.save), interpolateBuffer(buffer, { blockName }));

// style.scss
buffer = fs.readFileSync(path.resolve(templatePath, blockFiles.style));
fs.writeFileSync(path.resolve(blockPath, blockFiles.style), interpolateBuffer(buffer, { blockName }));

fs.appendFileSync(path.resolve(srcPath, 'index.js'), `import '../library/${blockName}';\n`);
