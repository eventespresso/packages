import React, { useCallback } from 'react';

import { __ } from '@eventespresso/i18n';
import { Heading, InlineEditText } from '@eventespresso/components';
import { useEvent } from '@eventespresso/edtr-services';

const EventPhoneNumber: React.FC = () => {
	const event = useEvent();

	const phoneNumber = event?.phoneNumber;

	const onChange = useCallback((string: string): void => {
		console.log(string);
	}, []);

	const text = __('Event Phone Number');

	return (
		<div>
			<Heading as='h4'>{text}</Heading>
			<InlineEditText onChangeValue={onChange} tag='h4' tooltip={text} value={phoneNumber} />
		</div>
	);
};

export default EventPhoneNumber;
