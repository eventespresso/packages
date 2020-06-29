import React from 'react';
import { storiesOf } from '@storybook/react';

import CheckboxGroup from '.';

function onChange(checkedValues) {
	console.log('checked = ', checkedValues);
}

const plainOptionsStory = () => {
	const plainOptions = ['Apple', 'Pear', 'Orange'];
	const defaultCheckedOptions = ['Orange'];

	return <CheckboxGroup defaultCheckedOptions={defaultCheckedOptions} onChange={onChange} options={plainOptions} />;
};

const objectOptionsStory = () => {
	const options = [
		{ label: 'Apple', value: 'apple' },
		{ label: 'Pear', value: 'pear' },
		{ label: 'Orange', value: 'orange' },
	];
	const defaultCheckedOptions = ['orange'];

	return <CheckboxGroup defaultCheckedOptions={defaultCheckedOptions} onChange={onChange} options={options} />;
};

storiesOf('CheckboxGroup', module)
	.add('Plain options', plainOptionsStory)
	.add('Object-shaped options', objectOptionsStory);
