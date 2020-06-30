import React from 'react';
import { formatISO } from 'date-fns';
import { __ } from '@wordpress/i18n';
import { IconButton } from '@wordpress/components';

const GeneratedDatetimeRow = ({ date, onClick, number }) => {
	return (
		<>
			{number + ' ' + date.toString()}
			<div className={'generated-datetime-trash-div'}>
				<IconButton
					tooltip={__('Add to Exceptions.', 'event_espresso')}
					label={__('Add to Exceptions', 'event_espresso')}
					icon={'trash'}
					onClick={onClick}
					value={formatISO(date)}
				/>
			</div>
		</>
	);
};

export default GeneratedDatetimeRow;
