import { __ } from '@wordpress/i18n';

import type { Datetime } from '@eventespresso/edtr-services';
import { DATETIME_STATUS_ID } from '@eventespresso/predicates';
import status from './status';

const getStatusTextLabel = (date: Datetime): string => {
	let dateStatus = '';
	switch (status(date)) {
		case DATETIME_STATUS_ID.SOLD_OUT:
			dateStatus = __('sold out');
			break;
		case DATETIME_STATUS_ID.EXPIRED:
			dateStatus = __('expired');
			break;
		case DATETIME_STATUS_ID.UPCOMING:
			dateStatus = __('upcoming');
			break;
		case DATETIME_STATUS_ID.ACTIVE:
			dateStatus = __('active');
			break;
		case DATETIME_STATUS_ID.TRASHED:
			dateStatus = __('trashed');
			break;
		case DATETIME_STATUS_ID.CANCELLED:
			dateStatus = __('cancelled');
			break;
		case DATETIME_STATUS_ID.POSTPONED:
			dateStatus = __('postponed');
			break;
		case DATETIME_STATUS_ID.INACTIVE:
		default:
			dateStatus = __('inactive');
			break;
	}

	return dateStatus;
};

export default getStatusTextLabel;
