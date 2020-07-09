import { __, sprintf } from '@wordpress/i18n';
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

const FIELD_NAMES: Array<keyof Datetime> = ['id', 'name', 'description', 'capacity', 'isTrashed'];

const useDateFormConfig = (id: EntityId, config?: EspressoFormProps): DateFormConfig => {
	const { startDate: start, endDate: end, ...restProps } = useDatetimeItem({ id }) || {};

	const { siteTimeToUtc } = useTimeZoneTime();

	const { onSubmit } = config;

	const onSubmitFrom: DateFormConfig['onSubmit'] = ({ dateTime, ...rest }, form, ...restParams) => {
		// convert "dateTime" object to proper UTC "startDate" and "endDate"
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
				title: __('Basics'),
				fields: [
					{
						name: 'name',
						label: __('Name'),
						fieldType: 'text',
						required: true,
						min: 3,
					},
					{
						name: 'description',
						label: __('Description'),
						fieldType: 'textarea',
					},
				],
			},
			{
				name: 'details',
				icon: ControlOutlined,
				title: __('Details'),
				fields: [
					{
						name: 'capacity',
						label: __('Capacity'),
						fieldType: 'number',
						parseAsInfinity: true,
						min: -1,
						info: sprintf(
							__(
								'The maximum number of registrants that can attend the event at this particular date.%sSet to 0 to close registration or leave blank for no limit.'
							),
							'\n'
						),
						formControlProps: adjacentFormItemProps,
					},
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
