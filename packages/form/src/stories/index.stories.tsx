import React from 'react';
import type { Meta } from '@storybook/react/types-6-0';

import EspressoForm from '../EspressoForm';

import config from './config';

export default {
	argTypes: {},
	title: 'Components/Form',
} as Meta;

export const Default = () => {
	return <EspressoForm {...config} />;
};
