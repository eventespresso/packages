import { __ } from '@wordpress/i18n';
import { pick } from 'ramda';

import { ControlOutlined, ProfileOutlined } from '@eventespresso/icons';
import type { EspressoFormProps } from '@eventespresso/form';
import { useDatetimeItem, processDateAndTime } from '@eventespresso/edtr-services';
import type { Datetime } from '@eventespresso/edtr-services';
import { EntityId } from '@eventespresso/data';
import { validate } from './formValidation';
import { DateFormShape } from '@eventespresso/event-editor/src/ui/datetimes/dateForm/types';
import { useTimeZoneTime } from '@eventespresso/services';

type DateFormConfig = EspressoFormProps<DateFormShape>;

// @ts-ignore
const FIELD_NAMES: Array<keyof Datetime> = ['id', 'name', 'type', 'isTrashed'];

const useDateFormConfig = (id: EntityId, config?: EspressoFormProps): DateFormConfig => {
	const { startDate: start, endDate: end, ...restProps } = useDatetimeItem({ id }) || {};

	const { siteTimeToUtc } = useTimeZoneTime();

	const { onSubmit } = config;

	const onSubmitFrom: DateFormConfig['onSubmit'] = ({ dateTime, ...rest }, form, ...restParams) => {
		const { startDate, endDate } = processDateAndTime(dateTime, siteTimeToUtc);

		const values = { ...rest, startDate, endDate };

		return onSubmit(values, form, ...restParams);
	};

	const initialValues: DateFormShape = {
		...pick<Partial<Datetime>, keyof Datetime>(FIELD_NAMES, restProps),
		dateTime: {},
	};

	const adjacentFormItemProps = {
		className: 'ee-form-item-pair',
	};

	return {
		...config,
		onSubmit: onSubmitFrom,
		initialValues,
		validate,
		layout: 'horizontal',
		debugFields: ['values', 'errors'],
		sections: [
			{
				name: 'basics',
				icon: ProfileOutlined,
				title: __('Length'),
				fields: [
					{
						// @ts-ignore
						name: 'number',
						label: __('number'),
						fieldType: 'number',
					},
					{
						// @ts-ignore
						name: 'type',
						label: __('type'),
						fieldType: 'select',
						options: [
							{
								label: 'day(s)',
								value: 'day',
							},
							{
								label: 'hour(s)',
								value: 'hour',
							},
							{
								label: 'minutes',
								value: 'minutes',
							},
						],
					},
				],
			},
			{
				name: 'details',
				icon: ControlOutlined,
				title: __('Details'),
				fields: [
					{
						name: 'isTrashed',
						label: __('Trash'),
						fieldType: 'switch',
						formControlProps: adjacentFormItemProps,
					},
				],
			},
		],
	};
};

export default useDateFormConfig;
