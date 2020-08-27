import React from 'react';
import { __ } from '@wordpress/i18n';

import { SelectInput } from '@eventespresso/components';
import { TicketsStatus, useTicketsListFilterState } from '@edtrServices/filterState';
import { useMemoStringify } from '@eventespresso/hooks';

const StatusControl: React.FC = () => {
	const { isChained, status, setStatus } = useTicketsListFilterState();
	const options = useMemoStringify(
		[
			{
				value: TicketsStatus.all,
				label: isChained ? __('all tickets for above dates') : __('all tickets for all dates'),
			},
			{
				value: TicketsStatus.onSaleAndPending,
				label: __('all on sale and sale pending'),
			},
			{
				value: TicketsStatus.onSaleOnly,
				label: __('on sale tickets only'),
			},
			{
				value: TicketsStatus.pendingOnly,
				label: __('sale pending tickets only'),
			},
			{
				value: TicketsStatus.nextOnSaleOrPendingOnly,
				label: __('next on sale or sale pending only'),
			},
			{
				value: TicketsStatus.soldOutOnly,
				label: __('sold out tickets only'),
			},
			{
				value: TicketsStatus.expiredOnly,
				label: __('expired tickets only'),
			},
			{
				value: TicketsStatus.trashedOnly,
				label: __('trashed tickets only'),
			},
		],
		[isChained]
	);
	return <SelectInput label={__('status')} value={status} options={options} onChangeValue={setStatus} />;
};

export default StatusControl;
