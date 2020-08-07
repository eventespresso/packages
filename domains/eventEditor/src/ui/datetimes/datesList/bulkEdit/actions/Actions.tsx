import React, { useState, useCallback } from 'react';
import { __ } from '@wordpress/i18n';
import { useDisclosure } from '@chakra-ui/hooks';

import { BulkActions, BulkActionsProps } from '@eventespresso/components';

import { EditDetails } from '../details';
import { Delete } from '../delete';
import { useMemoStringify } from '@eventespresso/hooks';
import { useDatesListFilterState, DatetimeStatus } from '@edtrServices/filterState';

const Actions: React.FC = () => {
	const [action, setAction] = useState('');

	const { isOpen, onOpen, onClose } = useDisclosure();

	const { status } = useDatesListFilterState();

	const areTrashedDates = status === DatetimeStatus.trashedOnly;

	const options = useMemoStringify([
		{
			value: '',
			label: __('bulk actions'),
		},
		{
			value: 'edit-details',
			label: __('edit datetime details'),
		},
		{
			value: 'delete',
			label: areTrashedDates ? __('delete datetimes') : __('trash datetimes'),
		},
	]);

	const onApply = useCallback<BulkActionsProps['onApply']>(
		(action) => {
			setAction(action);
			onOpen();
		},
		[onOpen]
	);

	return (
		<>
			<BulkActions options={options} onApply={onApply} defaultAction='' />
			{isOpen && (
				<>
					{action === 'edit-details' && <EditDetails isOpen={true} onClose={onClose} />}
					{action === 'delete' && <Delete areTrashedDates={areTrashedDates} onClose={onClose} />}
				</>
			)}
		</>
	);
};

export default Actions;
