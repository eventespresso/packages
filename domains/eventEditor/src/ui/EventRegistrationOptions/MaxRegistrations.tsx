import React, { useCallback } from 'react';

import { __ } from '@eventespresso/i18n';
import { InlineEditText } from '@eventespresso/components';
import { useEvent, useEventMutator } from '@eventespresso/edtr-services';
import type { InlineEditProps } from '@eventespresso/adapters';

import GridItem from './GridItem';

const MaxRegistrations: React.FC = () => {
	const event = useEvent();
	const { updateEntity: updateEvent } = useEventMutator(event?.id);
	const maxReg = event?.maxRegistrations;

	const onChange = useCallback<InlineEditProps['onChange']>(
		(maxRegistrations) => {
			updateEvent({ maxRegistrations: Number(maxRegistrations) });
		},
		[updateEvent]
	);

	const id = 'ee-event-registration-max-reg';
	const tooltip = __('edit maximum number of registrations allowed per transaction');

	return (
		<GridItem
			id={id}
			input={<InlineEditText onChange={onChange} tag='h4' tooltip={tooltip} value={String(maxReg)} />}
			label={__('Maximum Number of Registrations Allowed per Transaction')}
		/>
	);
};

export default MaxRegistrations;
