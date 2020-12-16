import React, { useCallback, useMemo } from 'react';

import { __ } from '@eventespresso/i18n';
import { GridItem, Select } from '@eventespresso/components';
import { useEvent, useEventManagers, useEventMutator } from '@eventespresso/edtr-services';
import { entityListToSelectOptions } from '@eventespresso/utils';

const EventManager: React.FC = () => {
	const event = useEvent();
	const eventManagers = useEventManagers();
	const managerId = event?.manager?.id;
	const { updateEntity: updateEvent } = useEventMutator(event?.id);

	const onChangeValue = useCallback(
		(newManagerId: string): void => {
			if (managerId !== newManagerId) {
				updateEvent({ manager: newManagerId });
			}
		},
		[managerId, updateEvent]
	);

	const id = 'ee-event-registration-manager';

	const options = useMemo(() => entityListToSelectOptions(eventManagers), [eventManagers]);

	const input = <Select onChangeValue={onChangeValue} options={options} type='inline' value={managerId} />;

	return <GridItem id={id} input={input} label={__('Event Manager')} />;
};

export default EventManager;
