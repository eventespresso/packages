import { __ } from '@eventespresso/i18n';

export const regStatusOptions = [
	{
		value: 'APPROVED',
		label: __('Approved'),
	},
	{
		value: 'CANCELLED',
		label: __('Cancelled'),
	},
	{
		value: 'DECLINED',
		label: __('Declined'),
	},
	{
		value: 'INCOMPLETE',
		label: __('Incomplete'),
	},
	{
		value: 'UNAPPROVED',
		label: __('Not Approved'),
	},
	{
		value: 'PENDING_PAYMENT',
		label: __('Pending Payment'),
	},
	{
		value: 'WAIT_LIST',
		label: __('Wait List'),
	},
];

export default regStatusOptions;
