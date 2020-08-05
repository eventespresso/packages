import React from 'react';
import { __ } from '@wordpress/i18n';

const Warning: React.FC = () => {
	return (
		<div className='ee-form-error-message'>
			<p>
				{__('Note: ')}
				{__('any changes will be applied to ALL the selected entities.')}
			</p>
		</div>
	);
};

export default Warning;
