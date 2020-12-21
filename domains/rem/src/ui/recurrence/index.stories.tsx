import React from 'react';
import type { Meta } from '@storybook/react/types-6-0';

import { PatternEditor } from './';

export default {
	argTypes: {},
	component: PatternEditor,
	title: 'Components/PatternEditor',
} as Meta;

export const Default = () => <PatternEditor />;
