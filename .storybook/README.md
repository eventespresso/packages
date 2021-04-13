# Storybook

Storybook is a place where UI components are being rendered in isolation.

## Getting Started

In order to add a new story a new file with extension `.stories.@(ts|tsx)` needs to be added to `domains` or `packages`, this will be automatically picked by `storybook` and rendered in it's preview.

## Addons

The storybook functionality has been enhanced with some addons.

-   A great example of `@storybook/addon-knobs` usage is [here](packages/ui-components/src/Upsell/index.stories.tsx). Docs are available [here](https://storybook.js.org/addons/@storybook/addon-knobs).
-   For easier responsiveness testing `@storybook/addon-viewport` is being used. More info can be found [here](https://storybook.js.org/docs/react/essentials/viewport)
-   The `a11y` testing is covered by `@storybook/addon-a11y`, more info [here](https://github.com/storybookjs/storybook/tree/next/addons/a11y)
-   For enhanced documentation `@storybook/addon-docs` might be used. More info [here](https://github.com/storybookjs/storybook/tree/master/addons/docs)
-   Since we are using `SASS(SCSS)` the `@storybook/preset-scss` addon is being used. Details info [here](https://github.com/storybookjs/presets/tree/master/packages/preset-scss).

## Customizations

Since we're using Chakra theme, we need a way to wrap storybook with that theme provider. This is done in `.storybook/preview.js` via `withTheme` decorator. More info on decorators [here](https://storybook.js.org/docs/react/writing-stories/decorators).

## Theming

Storybook can be configured to have dark theme. This is possible to adjust in `.storybook/manager.ts`, more info on that [here](https://storybook.js.org/docs/react/configure/theming).
