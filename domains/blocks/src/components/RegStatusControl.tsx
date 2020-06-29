import React from 'react';
import { SelectControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import { regStatusOptions as statusOptions } from '@eventespresso/predicates';
import type { SelectControlProps } from './types';
import type { RegistrationStatus } from '@eventespresso/data';

interface RegStatusControlProps extends SelectControlProps {
	setStatus?: (order: RegistrationStatus) => void;
	status: RegistrationStatus;
}

const RegStatusControl: React.FC<RegStatusControlProps> = ({ status, setStatus, ...rest }) => {
	return (
		<SelectControl
			label={__('Select Registration Status', 'event_espresso')}
			value={status}
			options={statusOptions}
			onChange={setStatus}
			{...rest}
		/>
	);
};

export default RegStatusControl;
