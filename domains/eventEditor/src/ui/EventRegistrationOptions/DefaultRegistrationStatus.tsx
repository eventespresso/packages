import React, { useCallback } from 'react';

import { __ } from '@eventespresso/i18n';
import { Heading, InlineEditSelect } from '@eventespresso/components';
import { useEvent } from '@eventespresso/edtr-services';
import { regStatusOptions } from '@eventespresso/predicates';

const DefaultRegistrationStatus: React.FC = () => {
	const event = useEvent();

	const onChange = useCallback(() => {
		console.log({ event });
	}, [event]);

	const id = 'ee-event-registration-active-status';

	return (
		<div>
			<Heading as='h4' id={id}>
				{__('Default Registration Status')}
			</Heading>
			<InlineEditSelect
				aria-describedby={id}
				onChange={onChange}
				options={regStatusOptions}
				value={'Pending Payment'}
			/>
		</div>
	);
};

export default DefaultRegistrationStatus;
