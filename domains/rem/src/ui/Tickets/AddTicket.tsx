import React from 'react';
import { __ } from '@wordpress/i18n';

import { Button } from '@eventespresso/components';
import { Plus } from '@eventespresso/icons';
import './style.scss';

const AddTicket: React.FC = () => {
	return <Button buttonText={__('Add ticket')} className='ee-add-ticket-btn' icon={Plus} />;
};

export default AddTicket;
