import React, { useCallback, useMemo, useState } from 'react';

import { __ } from '@eventespresso/i18n';
import { GridItem, Select } from '@eventespresso/components';
import { useEvent, useEventManagers, useEventMutator } from '@eventespresso/edtr-services';
import { entityListToSelectOptions } from '@eventespresso/utils';

const EventManager: React.FC = () => {
	const event = useEvent();
	const eventManagers = useEventManagers();
	const managerId = event?.manager?.id;
	const [newManagerId, setNewManagerId] = useState(managerId);
	const { updateEntity: updateEvent } = useEventMutator(event?.id);

	const onChangeValue = useCallback((newValue: string): void => {
		setNewManagerId(newValue);
	}, []);

	const onSubmit = useCallback(() => {
		updateEvent({ manager: newManagerId });
	}, [newManagerId, updateEvent]);

	const id = 'ee-event-registration-manager';

	const options = useMemo(() => entityListToSelectOptions(eventManagers), [eventManagers]);

	const input = (
		<Select
			defaultValue={managerId}
			onChangeValue={onChangeValue}
			onSubmit={onSubmit}
			options={options}
			type='inline'
			value={newManagerId}
		/>
	);
	return <GridItem id={id} input={input} label={__('Event Manager')} />;
};

export default EventManager;
