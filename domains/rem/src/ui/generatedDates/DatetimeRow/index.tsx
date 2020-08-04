import React, { useCallback } from 'react';
import classNames from 'classnames';
import { __ } from '@wordpress/i18n';

import { Rotate, PlusCircleFilled, Trash, CloseCircleFilled } from '@eventespresso/icons';
import { Button } from '@eventespresso/components';
import { useTimeZoneTime } from '@eventespresso/services';
import { DatetimeRowProps, DateType } from '../types';
import { getBgClassName, formatDate } from '../utils';

import './styles.scss';
import '../bg-colors.scss';

const iconMap: { [key in DateType]: React.ReactNode } = {
	gDate: <Rotate />,
	rDate: <PlusCircleFilled />,
	exDate: <CloseCircleFilled />,
};

const titleMap: { [key in DateType]: string } = {
	gDate: __('Add to Exceptions'),
	rDate: __('Remove'),
	exDate: __('Remove from Exceptions'),
};

const DatetimeRow: React.FC<DatetimeRowProps> = ({ date, ISOStr, type, toggleExDate }) => {
	const { formatForSite } = useTimeZoneTime();

	const bgClassName = getBgClassName(type);

	const titleClassName = classNames('ee-datetime-row__title', bgClassName);

	const title = formatDate(date, formatForSite);

	const onClickTrash = useCallback(() => toggleExDate(ISOStr), [toggleExDate, ISOStr]);

	return (
		<div>
			<div className={titleClassName}>
				{iconMap[type]}
				<span>{title}</span>
			</div>

			<div className='generated-datetime-trash-div'>
				<Button noMargin icon={Trash} onClick={onClickTrash} tooltip={titleMap[type]} />
			</div>
		</div>
	);
};

export default DatetimeRow;
