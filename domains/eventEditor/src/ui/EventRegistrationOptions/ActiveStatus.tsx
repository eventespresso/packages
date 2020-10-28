import React /* , { useCallback } */ from 'react';

import { __ } from '@eventespresso/i18n';
// import { objectToSelectOptions } from '@eventespresso/utils';
// import { useEvent } from '@eventespresso/edtr-services';

import GridItem from './GridItem';

/* const status = {
	isActive: __('Active'),
	isCancelled: __('Cancelled'),
	isExpired: __('Expired'),
	isInactive: __('Inactive'),
	isPostponed: __('Postponed'),
	isSoldOut: __('SoldOut'),
	isUpcoming: __('Upcoming'),
}; */

// const options = objectToSelectOptions(status);

const ActiveStatus: React.FC = () => {
	/* const event = useEvent();

	const onChange = useCallback(() => {
		console.log({ event });
	}, [event]); */

	const id = 'ee-event-registration-active-status';

	return <GridItem id={id} input={null} label={__('Active Status')} />;
};

export default ActiveStatus;
