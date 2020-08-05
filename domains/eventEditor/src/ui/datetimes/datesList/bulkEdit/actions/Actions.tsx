import React, { useState, useCallback } from 'react';
import { __ } from '@wordpress/i18n';
import { useDisclosure } from '@chakra-ui/hooks';

import { Button } from '@eventespresso/components';
import { Box } from '@eventespresso/adapters';
import { useBulkEdit } from '@eventespresso/services';

import Select from './Select';
import { EditDetails } from '../details';

const Actions: React.FC = () => {
	const [action, setAction] = useState('');
	const { getSelected } = useBulkEdit();

	const setValue = useCallback((value) => setAction(value), []);

	const { isOpen, onOpen, onClose } = useDisclosure();

	const isApplyDisabled = !action || !getSelected().length;

	return (
		<Box display='flex' alignItems='center' maxWidth='fit-content'>
			<Select value={action} setValue={setValue} />
			<Button onClick={onOpen} buttonText={__('apply')} isDisabled={isApplyDisabled} />
			{isOpen && <>{action === 'edit-details' && <EditDetails onClose={onClose} />}</>}
		</Box>
	);
};

export default Actions;
