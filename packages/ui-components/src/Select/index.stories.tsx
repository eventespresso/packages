import { useCallback, useState } from 'react';

import type { Story, Meta } from '@storybook/react/types-6-0';

import { Select } from '../';
import type { SelectProps } from './types';

export default {
	component: Select,
	title: 'Components/Select',
} as Meta;

type SelectStory = Story<SelectProps>;

export const Basic: SelectStory = () => (
	<Select aria-label='label' placeholder='Select option'>
		<option value='Option 1'>Option 1</option>
		<option value='Option 2'>Option 2</option>
		<option value='Option 3'>Option 3</option>
	</Select>
);

export const BasicRTL: SelectStory = () => (
	<div dir='rtl'>
		<Select aria-label='label' placeholder='Select option'>
			<option value='Option 1'>Option 1</option>
			<option value='Option 2'>Option 2</option>
			<option value='Option 3'>Option 3</option>
		</Select>
	</div>
);

export const Disabled: SelectStory = () => (
	<Select aria-label='label' placeholder='Select option' isDisabled>
		<option value='Option 1'>Option 1</option>
		<option value='Option 2'>Option 2</option>
		<option value='Option 3'>Option 3</option>
	</Select>
);

export const SelectControlled: SelectStory = () => {
	const [value, setValue] = useState('');
	const handleChange = useCallback((event: React.ChangeEvent<HTMLSelectElement>) => {
		setValue(event.target.value);
	}, []);

	return (
		<Select aria-label='label' onChange={handleChange} placeholder='Controlled select' value={value}>
			<option value='Option 1'>Option 1</option>
			<option value='Option 2'>Option 2</option>
			<option value='Option 3'>Option 3</option>
		</Select>
	);
};
