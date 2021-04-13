## Sass

The `.scss` files are preprocessed via the [`sass`](https://github.com/sass/dart-sass) NPM package.

## Mixins

In order to enhance reusability a few mixins has been used.

-   The mixins from `_base-styles.scss` provide consistent styling for form inputs.
-   In `_breakpoint.scss` we have responsive media queries.
-   The `button-variant` mixin from `_button.scss` abstracts away the logic for creating `primary`, `secondary` and `accent` variations of buttons, which is used in the loop from `packages/ui-components/src/Button/_colors.scss`.
-   The `reduce-motion` mixin is a `a11y`-related mixin, more info can be found [here](https://a11y-101.com/development/reduced-motion)
-   The mixins from `_screen-reader.scss` are also used for `a11y` purposes. In some cases we want to display something, but don't want to let screen readers access it, this is where `visually-hidden` mixin comes in handy. In situations when we don't want to show something, but want to make that element tabbable, we can use `visually-hidden-focusable`, an example is the `Skip to main content` from WP.
-   The `transition` mixin is using `reduce-motion` mixin to prevent animations, in case users have disabled it from their OS preferences.

## Variables

The `variables` folder is responsible for gathering all the needed variables into groups. In that folder we have the `prepend-append` function which is responsible for enhancing the colors variables before passing those to `root` variables.
Here is an example of transformation:

before:

```
$blue: (
	default: #297abc,
	super-high-contrast: #003a7c,
	high-contrast: #095a9c,
	low-contrast: #499adc,
	super-low-contrast: #69bafc,
	text-on: $white,
	text-on-super-high-contrast: #9bd5ff,
	text-on-high-contrast: #f7ffff,
	text-on-low-contrast: #000000,
	text-on-super-low-contrast: #002365,
) !default;
```

after `prepend-append($blue, 'blue');`:

```
(
    color-blue: #297abc,
    color-blue-super-high-contrast: #003a7c,
    color-blue-high-contrast: #095a9c,
    color-blue-low-contrast: #499adc,
    color-blue-super-low-contrast: #69bafc,
    text-on-blue: #ffffff,
    text-on-blue-super-high-contrast: #9bd5ff,
    text-on-blue-high-contrast: #f7ffff,
    text-on-blue-low-contrast: #000000,
    text-on-blue-super-low-contrast: #002365
)
```

CSS variables are being generated in the `root` folder, then are merged with `map-collect` function and appended to `:root`.

## Animations

In `_effects.scss` we have `keyframes` and `mixins` responsible for generation of a few animations.

## Debugging

`@debug` can help when we need to see the output of a function or mixin.
Here is an example `@debug prepend-append($blue, 'blue');`
More information [here](https://sass-lang.com/documentation/at-rules/debug)
