import React, { useCallback } from 'react';
import classNames from 'classnames';

import { CloseCircleFilled, PlusCircleFilled, Repeat, Trash } from '@eventespresso/icons';
import { IconButton } from '@eventespresso/components';
import { DateType, GeneratedDatetimeProps } from './types';
import { getBgClassName, formatDate, iconClassMap, tooltipMap } from './utils';

const iconActionMap: { [key in DateType]: React.ComponentType } = {
	gDate: Trash,
	rDate: CloseCircleFilled,
	exDate: PlusCircleFilled,
};

export const iconMap: { [key in DateType]: React.ReactNode } = {
	gDate: <Repeat />,
	rDate: <PlusCircleFilled />,
	exDate: <CloseCircleFilled />,
};

const GeneratedDatetime: React.FC<GeneratedDatetimeProps> = ({ date, ISOStr, type, toggleExDate }) => {
	const bgClassName = getBgClassName(type);
	const className = classNames('ee-generated-datetime__body', bgClassName);

	const gDateLabel = formatDate(date);

	const onClickTrash = useCallback(() => toggleExDate(ISOStr), [toggleExDate, ISOStr]);

	return (
		<li className={'ee-generated-datetime'}>
			<div className={className}>
				{iconMap[type]}
				<span>{gDateLabel}</span>
			</div>
			<div className='ee-generated-datetime__icon'>
				<IconButton
					borderless
					className={iconClassMap[type]}
					icon={iconActionMap[type]}
					onClick={onClickTrash}
					tooltip={tooltipMap[type]}
				/>
			</div>
		</li>
	);
};

export default GeneratedDatetime;
