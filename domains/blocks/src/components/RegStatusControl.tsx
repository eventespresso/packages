import React from 'react';
import { SelectControl } from '@wordpress/components';
import { __ } from '@eventespresso/i18n';

import type { RegistrationStatus } from '@eventespresso/data';
import type { SelectControlProps } from './types';
// imprort by absolute path to avoid loading the whole package
import statusOptions from '../../../../packages/predicates/src/registration/statusOptions';

interface RegStatusControlProps extends SelectControlProps {
	setStatus?: (order: RegistrationStatus) => void;
	status: RegistrationStatus;
}

const RegStatusControl: React.FC<RegStatusControlProps> = ({ status, setStatus, ...rest }) => {
	return (
		<SelectControl
			label={__('Select Registration Status')}
			value={status}
			options={statusOptions}
			onChange={setStatus}
			{...rest}
		/>
	);
};

export default RegStatusControl;
