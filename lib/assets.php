<?php
/**
 * Functions to register client-side assets (scripts and stylesheets)
 */

if (! defined('ABSPATH')) {
    die('No script kiddies! Go get a life!');
}

/**
 * Retrieves the root plugin path.
 *
 * @return string Root path to the ee_packages plugin.
 *
 * @since 0.0.1
 */
function ee_packages_dir_path()
{
    return EE_PACKAGES_DIR;
}

/**
 * Retrieves a URL to a file in the ee_packages plugin.
 *
 * @param  string $path Relative path of the desired file.
 *
 * @return string       Fully qualified URL pointing to the desired file.
 *
 * @since 0.0.1
 */
function ee_packages_url($path)
{
    return EE_PACKAGES_URL . $path;
}

/**
 * Registers a script according to `wp_register_script`. Honors this request by
 * reassigning internal dependency properties of any script handle already
 * registered by that name. It does not deregister the original script, to
 * avoid losing inline scripts which may have been attached.
 *
 * @since 0.0.1
 *
 * @param WP_Scripts       $scripts   WP_Scripts instance.
 * @param string           $handle    Name of the script. Should be unique.
 * @param string           $src       Full URL of the script, or path of the script relative to the WordPress root directory.
 * @param array            $deps      Optional. An array of registered script handles this script depends on. Default empty array.
 * @param string|bool|null $ver       Optional. String specifying script version number, if it has one, which is added to the URL
 *                                    as a query string for cache busting purposes. If version is set to false, a version
 *                                    number is automatically added equal to current installed WordPress version.
 *                                    If set to null, no version is added.
 * @param bool             $in_footer Optional. Whether to enqueue the script before </body> instead of in the <head>.
 *                                    Default 'false'.
 */
function ee_packages_override_script($scripts, $handle, $src, $deps = array(), $ver = false, $in_footer = false)
{
    $script = $scripts->query($handle, 'registered');
    // error_log(json_encode(compact('script', 'handle', 'src'), 128));
    if ($script) {
        /*
         * In many ways, this is a reimplementation of `wp_register_script` but
         * bypassing consideration of whether a script by the given handle had
         * already been registered.
         */

        // See: `_WP_Dependency::__construct` .
        $script->src  = $src;
        $script->deps = $deps;
        $script->ver  = $ver;
        $script->args = $in_footer;

        /*
         * The script's `group` designation is an indication of whether it is
         * to be printed in the header or footer. The behavior here defers to
         * the arguments as passed. Specifically, group data is not assigned
         * for a script unless it is designated to be printed in the footer.
         */

        // See: `wp_register_script` .
        unset($script->extra['group']);
        if ($in_footer) {
            $script->add_data('group', 1);
        }
    } else {
        $scripts->add($handle, $src, $deps, $ver, $in_footer);
    }
}

/**
 * Registers a style according to `wp_register_style`. Honors this request by
 * deregistering any style by the same handler before registration.
 *
 * @since 0.0.1
 *
 * @param WP_Styles        $styles WP_Styles instance.
 * @param string           $handle Name of the stylesheet. Should be unique.
 * @param string           $src    Full URL of the stylesheet, or path of the stylesheet relative to the WordPress root directory.
 * @param array            $deps   Optional. An array of registered stylesheet handles this stylesheet depends on. Default empty array.
 * @param string|bool|null $ver    Optional. String specifying stylesheet version number, if it has one, which is added to the URL
 *                                 as a query string for cache busting purposes. If version is set to false, a version
 *                                 number is automatically added equal to current installed WordPress version.
 *                                 If set to null, no version is added.
 * @param string           $media  Optional. The media for which this stylesheet has been defined.
 *                                 Default 'all'. Accepts media types like 'all', 'print' and 'screen', or media queries like
 *                                 '(orientation: portrait)' and '(max-width: 640px)'.
 */
function ee_packages_override_style($styles, $handle, $src, $deps = array(), $ver = false, $media = 'all')
{
    $style = $styles->query($handle, 'registered');
    if ($style) {
        $styles->remove($handle);
    }
    $styles->add($handle, $src, $deps, $ver, $media);
}

function ee_packages_get_manifest($key = 'files')
{
    $manifest_path = ee_packages_dir_path() . 'build/build-manifest.json';

    if (! file_exists($manifest_path)) {
        wp_die('No manifest file found. Try yarn dev');
    }

    $manifest_json = file_get_contents($manifest_path);
    $manifest      = json_decode($manifest_json, true);

    if (empty($manifest[ $key ])) {
        wp_die(sprintf('No entry for %1$s found in manifest file.', $key));
    }
    
    return $manifest[ $key ];
}



/**
 * Registers all the WordPress packages scripts that are in the standardized
 * `build/` location.
 *
 * @since 0.0.1
 *
 * @param WP_Scripts $scripts WP_Scripts instance.
 */
function ee_packages_register_scripts($scripts)
{
    $entry_points = array_keys(ee_packages_get_manifest('entrypoints'));
    $asset_files = ee_packages_get_manifest();
    
    $common_deps = array(
        'react',
        'react-dom',
        'jquery',
        'wp-i18n',
    );

    foreach ($entry_points as $entry_point) {

        // Get the path from root directory as expected by `ee_packages_url`.
        $package_path = 'build' . $asset_files[ $entry_point . '.js' ];
        
        // @todo find a way to auto-generate package dependencies.
        $dependencies = $common_deps;
        $version      = filemtime(ee_packages_dir_path() . $package_path); // no caching
        
        // error_log(json_encode(compact('path', 'handle', 'ee_packages_path'), 128));

        ee_packages_override_script(
            $scripts,
            $entry_point,
            ee_packages_url($package_path),
            $dependencies,
            $version,
            true
        );
    }
}
add_action('wp_default_scripts', 'ee_packages_register_scripts');
