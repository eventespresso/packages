import React from 'react';
import { __ } from '@wordpress/i18n';

const Warning: React.FC = () => {
	return (
		<div className='ee-form-error-message'>
			<p>
				{__('Note: ')}
				{__('any changes will be applied to ALL of the selected dates.')}
			</p>
		</div>
	);
};

export default Warning;
