import React, { useMemo } from 'react';

import { __ } from '@eventespresso/i18n';
import { entityListToSelectOptions } from '@eventespresso/utils';
import { GridItem, Heading, Select } from '@eventespresso/components';
import type { EventRegistrationOptionsProps } from './types';

interface Props extends Pick<EventRegistrationOptionsProps, 'eventManagers' | 'managerId' | 'onManagerChange'> {}

const EventManager: React.FC<Props> = ({ eventManagers, managerId, onManagerChange }) => {
	const id = 'ee-event-registration-manager';

	const options = useMemo(() => eventManagers && entityListToSelectOptions(eventManagers), [eventManagers]);

	return (
		<GridItem id={id} label={__('Event Manager')} size='big'>
			<Heading as='h4'>
				<Select onChangeValue={onManagerChange} options={options} type='inline' value={managerId} />
			</Heading>
		</GridItem>
	);
};

export default EventManager;
