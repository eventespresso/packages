import React, { useCallback, useMemo, useState } from 'react';

import { __ } from '@eventespresso/i18n';
import { PopoverForm, SelectInput } from '@eventespresso/components';
import { useEvent, useEventManagers } from '@eventespresso/edtr-services';
import { entityListToSelectOptions } from '@eventespresso/utils';

import GridItem from './GridItem';
import { find, propEq } from 'ramda';

const EventManager: React.FC = () => {
	const event = useEvent();
	const eventManagers = useEventManagers();
	const [value, setValue] = useState(event?.wpUser?.id);

	const onChangeValue = useCallback((newValue: string): void => {
		console.log({ newValue });
		setValue(newValue);
	}, []);

	const onSubmit = useCallback(() => {
		console.log({ value });
	}, [value]);

	const onClose = useCallback(() => {
		// reset value
		setValue(event?.wpUser?.id);
	}, [event?.wpUser?.id]);

	const id = 'ee-event-registration-manager';

	const options = useMemo(() => entityListToSelectOptions(eventManagers), [eventManagers]);

	const content = <SelectInput onChangeValue={onChangeValue} value={value} options={options} />;

	const selectedManagerName = useMemo(() => {
		return find<typeof eventManagers[0]>(propEq('id', value), eventManagers)?.name;
	}, [eventManagers, value]);

	return (
		<GridItem
			id={id}
			input={
				<PopoverForm
					title={__('Event Manager')}
					triggerText={selectedManagerName}
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
