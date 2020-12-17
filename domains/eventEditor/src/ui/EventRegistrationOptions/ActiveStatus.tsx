import React, { useMemo } from 'react';
import classNames from 'classnames';

import { __ } from '@eventespresso/i18n';
import { GridItem, Select } from '@eventespresso/components';
import { noop, objectToSelectOptions } from '@eventespresso/utils';
import { datetimeStatusBgColorClassName } from '@eventespresso/helpers';

const status = {
	isActive: __('Active'),
	isCancelled: __('Cancelled'),
	isExpired: __('Expired'),
	isInactive: __('Inactive'),
	isPostponed: __('Postponed'),
	isSoldOut: __('SoldOut'),
	isUpcoming: __('Upcoming'),
};

const ActiveStatus: React.FC = () => {
	const bgColorClassName = datetimeStatusBgColorClassName(null);
	const className = classNames('ee-event-registration-options__status', bgColorClassName);

	const id = 'ee-event-registration-active-status';

	const options = useMemo(() => objectToSelectOptions(status), []);

	const input = <Select onChangeValue={noop} options={options} type='inline' value={status.isActive} />;

	return <GridItem className={className} id={id} input={input} label={__('Active status')} />;
};

export default ActiveStatus;
