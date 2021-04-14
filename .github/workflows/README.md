# Chromatic

Chromatic is used for visual testing and is part of the review process.
The builds are triggered when the branch name starts with `sb/`. We are currently using the Free Plan which includes 5,000 snapshots monthly.
Given enough stories, this type of tooling is critical for confidently deploying UI components.

For example, when there is a parent component and derived components depends on that parent, any changes will cause some effects. Increasing spacing or changing the font-size in a particular variation might cause conflicts in some of the components. These kind of issues are caught by manual inspection, but it's becoming harder to test every single variation of a component as app is growing. This is where tools like `chromatic` shines, it will automate all the manual checks.

There are [many other similar tools](https://github.com/mojoaxel/awesome-regression-testing#online-services).
We chose Chromatic because it is built by the same team which maintains Storybook and the integration between these 2 might be more seamless.
