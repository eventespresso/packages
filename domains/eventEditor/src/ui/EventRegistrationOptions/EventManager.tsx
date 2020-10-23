import React, { useCallback } from 'react';

import { __ } from '@eventespresso/i18n';
import { Heading, InlineEditText } from '@eventespresso/components';
import { useEvent } from '@eventespresso/edtr-services';

const EventManager: React.FC = () => {
	const event = useEvent();

	const eventManager = event?.wpUser?.name;

	const onChange = useCallback((string: string): void => {
		console.log(string);
	}, []);

	const text = __('Event Manager');

	return (
		<div>
			<Heading as='h4'>{text}</Heading>
			<InlineEditText onChange={onChange} tag='h4' tooltip={text} value={eventManager} />
		</div>
	);
};

export default EventManager;
