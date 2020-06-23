<?php
/**
 * The plugin main file.
 *
 * @package         Event Espresso Barista
 * @author          Seth Shoultes
 * @copyright   (c) 2008-2018 Event Espresso  All Rights Reserved.
 * @license         {@link http://eventespresso.com/support/terms-conditions/}
 * @see             Plugin Licensing
 * @link            {@link http://www.eventespresso.com}
 * Plugin Name: Event Espresso Barista
 * Plugin URI: http://eventespresso.com/?ee_ver=ee4&utm_source=ee4_plugin_admin&utm_medium=link&utm_campaign=wordpress_plugins_page&utm_content=support_link
 * Description: Plugin useg for Event Espresso Packages development
 * Version: 0.0.1
 * Author: Event Espresso
 * Author URI: http://eventespresso.com/?ee_ver=ee4&utm_source=ee4_plugin_admin&utm_medium=link&utm_campaign=wordpress_plugins_page&utm_content=support_link
 * License: GPLv3
 * Text Domain: event_espresso
 * GitHub Plugin URI: https://github.com/eventespresso/packages
 */
if (!defined('ABSPATH')) {
    exit;
}

define('EE_BARISTA_BASENAME', plugin_basename(__FILE__));

define('EE_BARISTA_DIR', trailingslashit(plugin_dir_path(__FILE__)));

define('EE_BARISTA_URL', trailingslashit(plugins_url('', __FILE__)));

require_once __DIR__ . '/lib/load.php';
