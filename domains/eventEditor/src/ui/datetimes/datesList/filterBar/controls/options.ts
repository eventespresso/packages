import { __ } from '@eventespresso/i18n';

import { DisplayStartOrEndDate } from '@eventespresso/edtr-services';

import { DatetimeSales, DatetimeStatus } from '@edtrServices/filterState';

export const displayStartOrEndDateOptions = {
	[DisplayStartOrEndDate.start]: __('start dates only'),
	[DisplayStartOrEndDate.end]: __('end dates only'),
	[DisplayStartOrEndDate.both]: __('start and end dates'),
};

export const salesOptions = {
	[DatetimeSales.all]: __('all dates'),
	[DatetimeSales.above90Capacity]: __('dates above 90% capacity'),
	[DatetimeSales.above75Capacity]: __('dates above 75% capacity'),
	[DatetimeSales.above50Capacity]: __('dates above 50% capacity'),
	[DatetimeSales.below50Capacity]: __('dates below 50% capacity'),
};

export const statusOptions = {
	[DatetimeStatus.all]: __('all dates'),
	[DatetimeStatus.activeUpcoming]: __('all active and upcoming'),
	[DatetimeStatus.activeOnly]: __('active dates only'),
	[DatetimeStatus.upcomingOnly]: __('upcoming dates only'),
	[DatetimeStatus.nextActiveUpcomingOnly]: __('next active or upcoming only'),
	[DatetimeStatus.soldOutOnly]: __('sold out dates only'),
	[DatetimeStatus.recentlyExpiredOnly]: __('recently expired dates'),
	[DatetimeStatus.expiredOnly]: __('all expired dates'),
	[DatetimeStatus.trashedOnly]: __('trashed dates only'),
};

export const sortByOptions = {
	date: __('start date'),
	name: __('name'),
	id: __('ID'),
	order: __('custom order'),
};

export const labels = {
	displayStartOrEndDate: __('display'),
	sales: __('sales'),
	sortBy: __('sort by'),
	search: __('search'),
	status: __('status'),
};
