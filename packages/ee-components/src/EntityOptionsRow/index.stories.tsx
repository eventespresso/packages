import React from 'react';
import type { Meta } from '@storybook/react/types-6-0';

import { noop } from '@eventespresso/utils';
import { EntityOptionsRow } from './';

export default {
	argTypes: {},
	component: EntityOptionsRow,
	title: 'Components/EntityOptionsRow',
} as Meta;

const options = [
	{ label: 'Select…', value: '' },
	{ label: 'new date', value: 'RGF0ZXRpbWU6MTY1' },
	{ label: 'new date', value: 'RGF0ZXRpbWU6MTY2' },
	{ label: 'new date', value: 'RGF0ZXRpbWU6MTY3' },
	{ label: 'new date', value: 'RGF0ZXRpbWU6MTY4' },
	{ label: 'new date', value: 'RGF0ZXRpbWU6MTY5' },
	{ label: 'new date', value: 'RGF0ZXRpbWU6MTcw' },
	{ label: 'new date', value: 'RGF0ZXRpbWU6MTcx' },
	{ label: 'new date', value: 'RGF0ZXRpbWU6MTcy' },
	{ label: 'new date', value: 'RGF0ZXRpbWU6MTcz' },
];

export const Default = () => {
	return <EntityOptionsRow onAddNew={noop} onSelect={noop} onSelectChange={noop} options={options} type='datetime' />;
};
