import type { Meta } from '@storybook/react/types-6-0';

import { RadioGroup } from './RadioGroup';
import { Radio } from './';

export default {
	component: Radio,
	title: 'Components/Radio',
} as Meta;

const options = [
	{
		value: '1',
		label: 'First',
	},
	{
		value: '2',
		label: 'Second',
	},
	{
		value: '3',
		label: 'Third',
	},
];

export const Default = () => {
	return <RadioGroup options={options} />;
};
