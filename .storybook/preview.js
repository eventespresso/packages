import * as React from 'react';
import { ThemeProvider } from '@eventespresso/adapters';

const withTheme = (StoryFn) => (
	<ThemeProvider>
		<div id='story-wrapper'>
			<StoryFn />
		</div>
	</ThemeProvider>
);

export const decorators = [withTheme];
