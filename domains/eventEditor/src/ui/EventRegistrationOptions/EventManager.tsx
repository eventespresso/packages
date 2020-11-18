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

	const valueHasChanged = newManagerId && newManagerId !== managerId;

	const onSubmit = useCallback(() => {
		if (valueHasChanged) {
			updateEvent({ manager: newManagerId });
		}
	}, [newManagerId, updateEvent, valueHasChanged]);

	const id = 'ee-event-registration-manager';

	const options = useMemo(() => entityListToSelectOptions(eventManagers), [eventManagers]);

	return (
		<GridItem
			id={id}
			input={
				<Select
					defaultValue={managerId}
					onChangeValue={onChangeValue}
					onSubmit={onSubmit}
					options={options}
					type='inline'
					value={newManagerId}
				/>
			}
			label={__('Event Manager')}
		/>
	);
};

export default EventManager;
