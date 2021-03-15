import { useState } from 'react';
import { Stack } from '@chakra-ui/react';
import type { Meta } from '@storybook/react/types-6-0';

import { RadioGroup } from '@eventespresso/adapters';
import { Radio } from './';

export default {
	component: Radio,
	title: 'Components/Radio',
} as Meta;

export const Default = () => {
	const [value, setValue] = useState<string | number>('1');

	return (
		<RadioGroup onChange={setValue} value={value}>
			<Stack direction='row'>
				<Radio value='1'>First</Radio>
				<Radio value='2'>Second</Radio>
				<Radio value='3'>Third</Radio>
			</Stack>
		</RadioGroup>
	);
};
