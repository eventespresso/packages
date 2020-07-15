import React from 'react';
import { formatISO } from 'date-fns';
import { __ } from '@wordpress/i18n';

import { Button } from '@eventespresso/components';
import { Trash } from '@eventespresso/icons';

interface DatetimeRowProps {
	date: Date;
	onClick: VoidFunction;
	number: number;
}

const DatetimeRow: React.FC<DatetimeRowProps> = ({ date, onClick, number }) => {
	return (
		<>
			{number + ' ' + date.toString()}
			<div className='generated-datetime-trash-div'>
				<Button
					buttonText={formatISO(date)}
					icon={Trash}
					onClick={onClick}
					tooltip={__('Add to Exceptions.')}
				/>
			</div>
		</>
	);
};

export default DatetimeRow;
