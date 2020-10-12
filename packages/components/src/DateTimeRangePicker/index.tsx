import React, { useCallback, useState } from 'react';
import classNames from 'classnames';
import { head } from 'ramda';

import { __ } from '@eventespresso/i18n';
import { DateTimeRangePicker as DateTimeRangePickerAdapter } from '@eventespresso/dates';
import type { DateRangePickerProps } from '@eventespresso/dates';
import { Save } from '@eventespresso/icons';
import { useConfig } from '@eventespresso/services';

import { ButtonRow, ButtonType, IconButton, TimezoneTimeInfo } from '../';

import './styles.scss';

export const DateTimeRangePicker: React.FC<DateRangePickerProps> = ({ onChange, value, ...props }) => {
	const [dates, setDates] = useState(value);
	const {
		locale: { user },
	} = useConfig();

	const onSave: VoidFunction = useCallback(() => {
		onChange?.(dates);
	}, [dates, onChange]);

	const className = classNames(
		props.className,
		'ee-date-time-range-picker',
		'ee-calendar-datetime-picker',
		'ee-input-base-wrapper'
	);

	return (
		<div className={className}>
			<DateTimeRangePickerAdapter required locale={user} onChange={setDates} value={dates} {...props} />
			<ButtonRow fullWidth noMargin>
				<TimezoneTimeInfo date={head(dates)} />
				<IconButton
					aria-label={__('save')}
					buttonType={ButtonType.MINIMAL}
					className={'ee-date-time-range-picker-submit'}
					icon={Save}
					onClick={onSave}
				/>
			</ButtonRow>
		</div>
	);
};
