import React from 'react';
import classNames from 'classnames';
import { parseISO } from 'date-fns';
import { __ } from '@wordpress/i18n';

import {
	Rotate,
	//  PlusCircleFilled, CloseCircleFilled, Lock, InfoCircleFilled
} from '@eventespresso/icons';
import { Button } from '@eventespresso/components';
import { Trash } from '@eventespresso/icons';
import { useTimeZoneTime } from '@eventespresso/services';

import { LOCALIZED_DATE_FULL_FORMAT, TIME_ONLY_12H_SHORT_FORMAT } from '@eventespresso/constants';

import { DatetimeRowProps } from '../types';

import './styles.scss';

const DatetimeRow: React.FC<DatetimeRowProps> = ({ date, onClick, number, type }) => {
	const { formatForSite: format } = useTimeZoneTime();

	const titleClassName = classNames('ee-datetime-row__title', type && `ee-datetime-row__title--${type}`);

	const iconMappingBy = {
		generated: <Rotate />,
	};

	const dateObject = date instanceof Date ? date : parseISO(date);
	const title = `${number} ${format(dateObject, LOCALIZED_DATE_FULL_FORMAT)} ${format(
		dateObject,
		TIME_ONLY_12H_SHORT_FORMAT
	)}`;

	return (
		<div>
			<div className={titleClassName}>
				{iconMappingBy[type]}
				<span>{title}</span>
			</div>

			<div className='generated-datetime-trash-div'>
				<Button icon={Trash} onClick={onClick} tooltip={__('Add to Exceptions.')} />
			</div>
		</div>
	);
};

export default DatetimeRow;
