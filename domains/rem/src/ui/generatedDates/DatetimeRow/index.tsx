import React, { useCallback } from 'react';
import classNames from 'classnames';
import { __ } from '@wordpress/i18n';

import { Rotate, PlusCircleFilled, Trash, CloseCircleFilled } from '@eventespresso/icons';
import { Button } from '@eventespresso/components';
import { useTimeZoneTime } from '@eventespresso/services';

import { DatetimeRowProps } from '../types';

import './styles.scss';
import { formatDate } from '../utils';

const iconMappingBy = {
	generated: <Rotate />,
	addition: <PlusCircleFilled />,
	exception: <CloseCircleFilled />,
};

const DatetimeRow: React.FC<DatetimeRowProps> = ({ date, number, type, toggleExDate }) => {
	const { formatForSite } = useTimeZoneTime();

	const titleClassName = classNames('ee-datetime-row__title', type && `ee-datetime-row__title--${type}`);

	const title = formatDate(date, formatForSite);

	const onClickTrash = useCallback(() => toggleExDate(date), [toggleExDate, date]);

	return (
		<div>
			<div className={titleClassName}>
				{iconMappingBy[type]}
				<span>{title}</span>
			</div>

			<div className='generated-datetime-trash-div'>
				<Button
					icon={Trash}
					onClick={onClickTrash}
					tooltip={type === 'exception' ? __('Remove from Exceptions.') : __('Add to Exceptions.')}
				/>
			</div>
		</div>
	);
};

export default DatetimeRow;
