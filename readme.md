# Multi Blocks
Contributors:      Danny Pendle \
Tags:              block \
Tested up to:      5.8.0 \
Stable tag:        0.1.0 \
License:           GPL-2.0-or-later \
License URI:       https://www.gnu.org/licenses/gpl-2.0.html \

This is a scaffold for creating multiple Gutenberg blocks within a single plugin

## Description

This plugin is designed to be cloned and extended rather than used as is.

## Installation

After activation your blocks should be loaded automatically.
To create new blocks run 'npm run new-block YOUR-BLOCK-NAME'
e.g.
`npm run new-block cool-accordion`

run npm run start to compile your block assets, as long as this plugin is activated
your blocks should be available to you right away.


## Frequently Asked Questions

### How do I delete blocks

Simply delete the whole block folder from 'library/'

### Can I change the block scaffolding?

Yes! Blocks are scaffolded using template files (located under 'templates/'). 
When you run npm new-block, the script copies across these files with some interpolation (the block name).
The new files are stored in their own folder and can be modified after without changing the template.
You could even change the template during development, perhaps half your blocks share a similar structure,
then you have another set which also share a similar structure. Use the templates to save you some time.

 ## Changelog

### 0.1.0

* Bundles
To use a single monolithic bundle for all blocks there are a few small steps to take. 
	
* Uncomment the last line from create-block.js.
	
* You must also comment out the entry section of the webpack.config.js.
	
* Finally, in the templates/block.json, replace the last 3 instances of '${blockName}' (editorScript, editorStyle & style) with 'index'. \
Now you should be good to go, your monolithic bundle will be included automatically but you will not be able to
choose individual blocks to exclude from your project.
