import React, { useCallback } from 'react';

import { __ } from '@eventespresso/i18n';
import { InlineEditSelect } from '@eventespresso/components';
import { useEvent } from '@eventespresso/edtr-services';
import { regStatusOptions } from '@eventespresso/predicates';

import GridItem from './GridItem';

const DefaultRegistrationStatus: React.FC = () => {
	const event = useEvent();

	const onChange = useCallback(() => {
		console.log({ event });
	}, [event]);

	const id = 'ee-event-registration-default-status';

	return (
		<GridItem
			id={id}
			input={
				<InlineEditSelect
					aria-describedby={id}
					onChange={onChange}
					options={regStatusOptions}
					value={'Pending Payment'}
				/>
			}
			label={__('Default Registration Status')}
		/>
	);
};

export default DefaultRegistrationStatus;