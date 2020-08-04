import React, { useState, useCallback } from 'react';
import { __ } from '@wordpress/i18n';

import Select from './Select';
import { Button } from '@eventespresso/components';
import { useBulkEdit } from '@eventespresso/services';
import { Box } from '@eventespresso/adapters';

const Actions: React.FC = () => {
	const [action, setAction] = useState('');
	const { getSelected } = useBulkEdit();

	const setValue = useCallback((value) => setAction(value), []);
	return (
		<Box display='flex' alignItems='center' maxWidth='fit-content'>
			<Select value={action} setValue={setValue} />
			<Button onClick={() => console.log(action, getSelected())} buttonText={__('apply')} />
		</Box>
	);
};

export default Actions;
