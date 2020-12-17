import React, { useMemo } from 'react';

import { __ } from '@eventespresso/i18n';
import { entityListToSelectOptions } from '@eventespresso/utils';
import { GridItem, Select } from '@eventespresso/components';
import type { EventRegistrationOptionsProps } from './types';

interface Props extends Pick<EventRegistrationOptionsProps, 'eventManagers' | 'managerId' | 'onManagerChange'> {}

const EventManager: React.FC<Props> = ({ eventManagers, managerId, onManagerChange }) => {
	const id = 'ee-event-registration-manager';

	const options = useMemo(() => eventManagers && entityListToSelectOptions(eventManagers), [eventManagers]);

	const input = (
		<Select
			defaultValue={managerId}
			onChangeValue={onManagerChange}
			options={options}
			type='inline'
			value={managerId}
		/>
	);
	return <GridItem id={id} input={input} label={__('Event Manager')} />;
};

export default EventManager;
