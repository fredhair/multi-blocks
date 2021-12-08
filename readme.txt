=== Example Block ===
Contributors:      Danny Pendle
Tags:              block
Tested up to:      5.8.0
Stable tag:        0.1.0
License:           GPL-2.0-or-later
License URI:       https://www.gnu.org/licenses/gpl-2.0.html

This is a scaffold for creating multiple Gutenberg blocks within a single plugin

== Description ==

This plugin is designed to be cloned and extended rather than used as is.

== Installation ==

After activation your blocks should be loaded automatically.
To create new blocks run 'npm run new-block YOUR-BLOCK-NAME'
e.g.
`npm run new-block cool-accordion`

run npm run start to compile your block assets, as long as this plugin is activated
your blocks should be available to you right away.


== Frequently Asked Questions ==

= How do I delete blocks =

Simply delete the whole block folder from 'library/'

== Changelog ==

= 0.1.0 =
* Release

== Arbitrary section ==
To use a single monolithic bundle for all blocks simple uncomment the last line from create-block.js.
You must also comment out the entry section of the webpack.config.js.
Finally, in the templates/block.json, replace the last 3 instances of '${blockName}'
(editorScript, editorStyle & style) with 'index'.

Now you should be good to go, your monolithic bundle will be included automatically but you will not be able to
choose individual blocks to exclude from your project.
