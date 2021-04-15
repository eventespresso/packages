# The build process

The scripts in this file provide assets that are ready to be parsed by browsers within the plugin `assets` folder.

## build.js

The `build.js` mirrors this [file](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/scripts/build.js) from CRA with some minor changes. For example, we don't need `copyPublicFolder` function, so it's removed.
This script creates the production build assets.

## test.js

The `test.js` script gathers test configurations and starts unit-testing through `jest`.

## watch.js

The `watch.js` script provides the development build for local development/debugging.

In future CRA upgrades, we need to take into account the changes in this [folder](https://github.com/facebook/create-react-app/tree/master/packages/react-scripts/scripts), if there is a need for a more modern build process.
