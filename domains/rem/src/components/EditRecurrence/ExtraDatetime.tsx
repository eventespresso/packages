import React from 'react';
import { __ } from '@wordpress/i18n';

import { Button } from '@eventespresso/components';
import { Datepicker } from '@eventespresso/adapters';
import { Insert, Trash } from '@eventespresso/icons';

interface ExtraDatetimeProps {
	extraDate: any;
	options: any;
	handleChange: VoidFunction;
	datetimeCount: number;
	addDateHandler: VoidFunction;
	deleteDateHandler: VoidFunction;
	index: number;
}

const ExtraDatetime: React.FC<ExtraDatetimeProps> = ({
	extraDate,
	options,
	handleChange,
	datetimeCount,
	addDateHandler,
	deleteDateHandler,
	index,
}) => {
	return (
		<>
			{/* To be extended */}
			<Datepicker onChange={handleChange} />

			{index === datetimeCount ? (
				<Button icon={Insert} onClick={addDateHandler} tooltip={__('Add Extra Event Date')} />
			) : (
				<Button icon={Trash} onClick={deleteDateHandler} tooltip={__('Delete this Event Date')} />
			)}
		</>
	);
};

export default ExtraDatetime;
