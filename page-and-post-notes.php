<?php
/**
* Plugin Name: Page and Post Notes
* Description: Keep the notes for each page and post within it.
* Author: webdeveloperphp6
* Version: 1.0.0
* Plugin URI: https://sitefreelancing.com/product/page-post-notes/
* Author URI: https://sitefreelancing.com/
* License: GPL2+
* License URI: http://www.gnu.org/licenses/gpl-2.0.txt
**/

defined( 'ABSPATH' ) || exit;

define( 'NOTES_VERSION', '1.0.0' );
define( 'NOTES_PLUGIN_DIR', dirname( __FILE__ ) );
define( 'NOTES_PLUGIN_URL', plugin_dir_url( __FILE__ ) );

/**
 * Registers all block assets so that they can be enqueued through Gutenberg in
 * the corresponding context.
 */
function pnp_register_block() {
	$default_asset_file = array(
		'dependencies' => array(),
		'version'      => NOTES_VERSION,
	);

	// Editor Script.
	$asset_filepath = NOTES_PLUGIN_DIR . '/build/notes.asset.php';
	$asset_file     = file_exists( $asset_filepath ) ? include $asset_filepath : $default_asset_file;

	wp_enqueue_script(
		'notes-editor',
		NOTES_PLUGIN_URL . 'build/notes.js',
		$asset_file['dependencies'],
		$asset_file['version'],
		true // Enqueue script in the footer.
	);
}

add_action( 'init', 'pnp_register_block' );

/**
 * Register Page & Post Notes Meta Field with the REST API.
 */
function pnp_register_meta() {
	register_meta(
		'post',
		'_pnp_field',
		array(
			'type'          => 'string',
			'single'        => true,
			'show_in_rest'  => true,
			'auth_callback' => '__return_true',
		)
	);
}
add_action( 'init', 'pnp_register_meta' );
