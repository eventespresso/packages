import React, { useCallback } from 'react';

import { __ } from '@eventespresso/i18n';
import { Heading, InlineEditText } from '@eventespresso/components';
import { useEvent, useEventMutator } from '@eventespresso/edtr-services';
import type { InlineEditProps } from '@eventespresso/adapters';

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

	const tooltip = __('edit maximum number of registrations allowed per transaction');

	return (
		<div>
			<Heading as='h4'>{__('Maximum Number of Registrations Allowed per Transaction')}</Heading>
			<InlineEditText onChange={onChange} tag='h4' tooltip={tooltip} value={String(maxReg)} />
		</div>
	);
};

export default MaxRegistrations;
