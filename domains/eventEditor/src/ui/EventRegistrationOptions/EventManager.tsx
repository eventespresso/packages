import React, { useCallback } from 'react';

import { __ } from '@eventespresso/i18n';
import { InlineEditText } from '@eventespresso/components';
import { useEvent } from '@eventespresso/edtr-services';

import GridItem from './GridItem';

const EventManager: React.FC = () => {
	const event = useEvent();
	const eventManager = event?.wpUser?.name;

	const onChange = useCallback((string: string): void => {
		console.log(string);
	}, []);

	const id = 'ee-event-registration-manager';

	return (
		<GridItem
			id={id}
			input={<InlineEditText aria-describedby={id} onChange={onChange} tag='h4' value={eventManager} />}
			label={__('Event Manager')}
		/>
	);
};

export default EventManager;
