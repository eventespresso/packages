import React, { useState, useCallback } from 'react';
import { __ } from '@wordpress/i18n';
import { useDisclosure } from '@chakra-ui/hooks';

import { BulkActions, BulkActionsProps } from '@eventespresso/components';

import { EditDetails } from '../details';
import { useMemoStringify } from '@eventespresso/hooks';

const Actions: React.FC = () => {
	const [action, setAction] = useState('');

	const { isOpen, onOpen, onClose } = useDisclosure();

	const options = useMemoStringify([
		{
			value: '',
			label: __('bulk actions'),
		},
		{
			value: 'edit-details',
			label: __('edit ticket details'),
		},
		{
			value: 'delete',
			label: __('delete tickets'),
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
			{isOpen && <>{action === 'edit-details' && <EditDetails isOpen={true} onClose={onClose} />}</>}
		</>
	);
};

export default Actions;
