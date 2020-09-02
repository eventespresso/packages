import { __ } from '@wordpress/i18n';
import { Weekday, Frequency } from './types';

export const MONTHS = {
	Jan: __('Jan'),
	Feb: __('Feb'),
	Mar: __('Mar'),
	Apr: __('Apr'),
	May: __('May'),
	Jun: __('Jun'),
	Jul: __('Jul'),
	Aug: __('Aug'),
	Sep: __('Sep'),
	Oct: __('Oct'),
	Nov: __('Nov'),
	Dec: __('Dec'),
};

export const DAYS = {
	MO: __('Monday'),
	TU: __('Tuesday'),
	WE: __('Wednesday'),
	TH: __('Thursday'),
	FR: __('Friday'),
	SA: __('Saturday'),
	SU: __('Sunday'),
	DAY: __('Day'),
	WEEKDAY: __('Weekday'),
	WEEKEND_DAY: __('Weekend day'),
};

export const SHORT_DAYS = {
	MO: __('Mon'),
	TU: __('Tue'),
	WE: __('Wed'),
	TH: __('Thu'),
	FR: __('Fri'),
	SA: __('Sat'),
	SU: __('Sun'),
};

export const ALL_WEEKDAYS: Array<Weekday> = ['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];

export const FREQUENCY: { [key in Frequency]: string } = {
	YEARLY: __('Yearly'),
	MONTHLY: __('Monthly'),
	WEEKLY: __('Weekly'),
	DAILY: __('Daily'),
	HOURLY: __('Hourly'),
	MINUTELY: __('Minutely'),
	SECONDLY: __('Secondly'),
};
