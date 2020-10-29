import React, { useCallback, useMemo, useState } from 'react';

import { __ } from '@eventespresso/i18n';
import { PopoverForm, SelectInput } from '@eventespresso/components';
import { useEvent, useEventManagers, useEventMutator } from '@eventespresso/edtr-services';
import { entityListToSelectOptions } from '@eventespresso/utils';

import GridItem from './GridItem';

const EventManager: React.FC = () => {
	const event = useEvent();
	const eventManagers = useEventManagers();
	const [newManagerId, setNewManagerId] = useState('');
	const { updateEntity: updateEvent } = useEventMutator(event?.id);

	const onChangeValue = useCallback((newValue: string): void => {
		setNewManagerId(newValue);
	}, []);

	const onSubmit = useCallback(() => {
		updateEvent({ manager: newManagerId });
	}, [newManagerId, updateEvent]);

	const onClose = useCallback(() => {
		// reset value
		setNewManagerId(event?.manager?.id);
	}, [event?.manager?.id]);

	const id = 'ee-event-registration-manager';

	const options = useMemo(() => entityListToSelectOptions(eventManagers), [eventManagers]);

	const content = (
		<SelectInput onChangeValue={onChangeValue} value={newManagerId || event?.manager?.id} options={options} />
	);

	return (
		<GridItem
			id={id}
			input={
				<PopoverForm
					title={__('Event Manager')}
					triggerText={event?.manager?.name}
					content={content}
					onSubmit={onSubmit}
					onClose={onClose}
				/>
			}
			label={__('Event Manager')}
		/>
	);
};

export default EventManager;
