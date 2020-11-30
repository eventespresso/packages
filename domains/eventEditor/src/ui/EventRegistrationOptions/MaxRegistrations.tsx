import React, { useCallback } from 'react';

import { __ } from '@eventespresso/i18n';
import { GridItem, InlineEditText } from '@eventespresso/components';
import { useEvent, useEventMutator } from '@eventespresso/edtr-services';
import type { InlineEditProps } from '@eventespresso/adapters';

const MaxRegistrations: React.FC = () => {
	const event = useEvent();
	const { updateEntity: updateEvent } = useEventMutator(event?.id);
	const maxReg = event?.maxRegistrations;

	const onChange = useCallback<InlineEditProps['onChange']>(
		(newMaxRegistrations) => {
			const maxRegistrations = Number(newMaxRegistrations);
			if (maxRegistrations !== maxReg) {
				updateEvent({ maxRegistrations });
			}
		},
		[maxReg, updateEvent]
	);

	const id = 'ee-event-registration-max-reg';

	const input = (
		<InlineEditText
			aria-describedby={id}
			onChange={onChange}
			tag='h4'
			// convert the value to string
			value={maxReg && String(maxReg)}
		/>
	);

	return <GridItem id={id} input={input} label={__('Maximum Number of Registrations Allowed per Transaction')} />;
};

export default MaxRegistrations;
