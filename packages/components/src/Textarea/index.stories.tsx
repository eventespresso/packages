import React, { useCallback } from 'react';
import type { Story, Meta } from '@storybook/react/types-6-0';

import { Textarea } from './';
import { TextareaProps } from '@eventespresso/adapters';

export default {
	component: Textarea,
	title: 'Components/Textarea',
} as Meta;

type TextareaStory = Story<TextareaProps>;

export const Basic: TextareaStory = () => <Textarea defaultValue='This is a textarea' />;

export const Rows: TextareaStory = () => <Textarea defaultValue='This is a textarea' rows={12} />;

export const Disabled: TextareaStory = () => <Textarea isDisabled placeholder='A disabled textarea' />;

export const Invalid: TextareaStory = () => <Textarea isInvalid placeholder='An invalid textarea' />;

export const Controlled: TextareaStory = () => {
	const [value, setValue] = React.useState('');

	const onChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setValue(e.target.value);
	}, []);

	return (
		<>
			<p>Value: {value}</p>
			<Textarea mt='8px' value={value} placeholder='Enter value' onChange={onChange} />
		</>
	);
};

export const WithResize: TextareaStory = () => (
	<Textarea placeholder='Here is a sample placeholder' resize='horizontal' />
);
