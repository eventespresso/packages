import { addParameters, configure } from '@storybook/react';
import { themes } from '@storybook/theming';

addParameters({
  options: {
    theme: themes.dark,
  },
});

const comps = require.context('@eventespresso/components/src', true, /.stories.tsx$/);

configure(() => {
  comps.keys().forEach(filename => comps(filename));
}, module);
