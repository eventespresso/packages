import React from 'react';
import { __ } from '@eventespresso/i18n';

type WarningProps = {
	message?: string;
};

const Warning: React.FC<WarningProps> = ({ message }) => {
	return (
		<div className='ee-form-error-message'>
			<p>
				{__('Note: ')}
				{message || __('any changes will be applied to ALL of the selected entities.')}
			</p>
		</div>
	);
};

export default Warning;
