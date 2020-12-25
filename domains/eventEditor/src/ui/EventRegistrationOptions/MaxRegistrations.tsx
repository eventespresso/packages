import React from 'react';

import { __ } from '@eventespresso/i18n';
import { GridItem, Heading, InlineEditText } from '@eventespresso/ui-components';
import type { EventRegistrationOptionsProps } from './types';

interface Props extends Pick<EventRegistrationOptionsProps, 'maxReg' | 'onMaxRegChange'> {}

const MaxRegistrations: React.FC<Props> = ({ maxReg, onMaxRegChange }) => {
	const id = 'ee-event-registration-max-reg';
	const strValue = maxReg && String(maxReg);

	return (
		<GridItem id={id} label={__('Max Registrations per Transaction')} size='small'>
			<Heading as='h4' className={'ee-status-heading'}>
				<InlineEditText aria-describedby={id} onChange={onMaxRegChange} tag='h4' value={strValue} />
			</Heading>
		</GridItem>
	);
};

export default MaxRegistrations;
