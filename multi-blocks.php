<?php
/**
 * Plugin Name:       Multi Blocks
 * Description:       This is a scaffold for creating multiple Gutenberg blocks within a single plugin
 * Requires at least: 5.8
 * Requires PHP:      7.4
 * Version:           0.1.0
 * Author:            Danny Pendle
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       multi-blocks
 *
 * @package           dd-blocks
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/how-to-guides/block-tutorial/writing-your-first-block-type/
 */
function dd_blocks_multi_blocks_block_init() {

	//Find all subdirs in Library for this array.
	//Make this POSIX compliant
	$blocks_src = glob(__DIR__ . '/library/*', GLOB_ONLYDIR);
	$blocks = [];
	foreach($blocks_src as $block) {
		$blocks.array_push($blocks, substr($block, strrpos($block, '/') + 1));
	}
	// $blocks = [
	// 	'example-block',
	// ];


	print_r($blocks);

	foreach( $blocks as $block ) {
		register_block_type( plugin_dir_path( __FILE__ ) . 'library/' . $block );
	}
}

add_action( 'init', 'dd_blocks_multi_blocks_block_init' );
