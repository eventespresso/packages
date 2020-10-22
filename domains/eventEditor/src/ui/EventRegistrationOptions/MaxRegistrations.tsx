import React, { useCallback } from 'react';

import { __ } from '@eventespresso/i18n';
import { Heading, InlineEditText } from '@eventespresso/components';
import { useEvent } from '@eventespresso/edtr-services';

const MaxRegistrations: React.FC = () => {
	const event = useEvent();

	const maxReg = event?.maxRegistrations || 10;

	const onChange = useCallback((number: number): void => {
		// update the max reg number
		console.log({ number });
	}, []);

	const tooltip = __('edit maximum number of registrations allowed per transaction');

	return (
		<div>
			<Heading as='h4'>{__('Maximum Number of Registrations Allowed per Transaction')}</Heading>
			<InlineEditText onChangeValue={onChange} tag='h4' tooltip={tooltip} value={String(maxReg)} />
		</div>
	);
};

export default MaxRegistrations;
