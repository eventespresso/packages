import React from 'react';
import type { Meta } from '@storybook/react/types-6-0';

import TestForm from './TestForm';

export default {
	argTypes: {},
	title: 'Components/Form',
} as Meta;

export const Default = () => {
	return <TestForm />;
};
