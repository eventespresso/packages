import React, { useMemo } from 'react';
import type { Story, Meta } from '@storybook/react/types-6-0';

import { TestForm } from '../../';
import config from './config';

export default {
	argTypes: {},
	title: 'Components/Form',
} as Meta;

export const Default = () => {
	return <TestForm {...config} />;
};
