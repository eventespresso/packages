import React from 'react';

import { __ } from '@eventespresso/i18n';
import { GridItem, InlineEditText } from '../../';
import type { RegistrationOptionsMetaBoxProps } from './types';

interface Props extends Pick<RegistrationOptionsMetaBoxProps, 'maxReg' | 'onMaxRegChange'> {}

const MaxRegistrations: React.FC<Props> = ({ maxReg, onMaxRegChange }) => {
	const id = 'ee-event-registration-max-reg';
	const strValue = maxReg && String(maxReg);

	const input = <InlineEditText aria-describedby={id} onChange={onMaxRegChange} tag='h4' value={strValue} />;

	return (
		<GridItem
			id={id}
			input={input}
			label={__('Maximum Number of Registrations Allowed per Transaction')}
			size='small'
		/>
	);
};

export default MaxRegistrations;
