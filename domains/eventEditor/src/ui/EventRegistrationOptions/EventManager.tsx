import React, { useCallback, useMemo, useState } from 'react';

import { __ } from '@eventespresso/i18n';
import { Select } from '@eventespresso/components';
import { useEvent, useEventManagers, useEventMutator } from '@eventespresso/edtr-services';
import { entityListToSelectOptions } from '@eventespresso/utils';

import GridItem from './GridItem';

const EventManager: React.FC = () => {
	const event = useEvent();
	const eventManagers = useEventManagers();
	const managerId = event?.manager?.id;
	const [newManagerId, setNewManagerId] = useState(managerId);
	const { updateEntity: updateEvent } = useEventMutator(event?.id);

	const onChangeValue = useCallback((newValue: string): void => {
		setNewManagerId(newValue);
	}, []);

	const isValueChanged = newManagerId && newManagerId !== managerId;

	const onSubmit = useCallback(() => {
		if (isValueChanged) {
			updateEvent({ manager: newManagerId });
		}
	}, [isValueChanged, newManagerId, updateEvent]);

	const id = 'ee-event-registration-manager';

	const options = useMemo(() => entityListToSelectOptions(eventManagers), [eventManagers]);

	return (
		<GridItem
			id={id}
			input={
				<Select
					onChangeValue={onChangeValue}
					onSubmit={onSubmit}
					options={options}
					showSubmit={isValueChanged}
					type='inline'
					value={newManagerId}
				/>
			}
			label={__('Event Manager')}
		/>
	);
};

export default EventManager;
