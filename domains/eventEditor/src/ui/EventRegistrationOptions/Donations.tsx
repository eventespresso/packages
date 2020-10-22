import React, { useCallback } from 'react';

import { __ } from '@eventespresso/i18n';
import { Heading, SwitchInput } from '@eventespresso/components';
import { useEvent } from '@eventespresso/edtr-services';

const Donations: React.FC = ({ isChecked = false }: any) => {
	const event = useEvent();

	const onChange = useCallback(() => {
		console.log({ event });
	}, [event]);

	const heading = isChecked ? __('Disable Donations') : __('Enable Donations');

	const id = 'ee-event-donations';

	return (
		<div>
			<Heading as='h4' id={id}>
				{heading}
			</Heading>
			<SwitchInput aria-describedby={id} isChecked={isChecked} onChangeValue={onChange} />
		</div>
	);
};

export default Donations;
