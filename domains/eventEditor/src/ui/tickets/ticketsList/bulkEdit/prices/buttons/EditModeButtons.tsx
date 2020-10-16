import React, { useCallback } from 'react';
import { __ } from '@eventespresso/i18n';

import { Button } from '@eventespresso/components';
import { Box, Divider } from '@eventespresso/adapters';
import type { EditMode } from '../types';

export interface EditModeButtonsProps {
	setEditMode: (editMode: EditMode) => void;
}

export const EditModeButtons: React.FC<EditModeButtonsProps> = ({ setEditMode }) => {
	const onClickTogether = useCallback(() => setEditMode('together'), [setEditMode]);
	const onClickSeparate = useCallback(() => setEditMode('separate'), [setEditMode]);

	return (
		<Box display='flex' alignItems='center' justifyContent='center' height='100%'>
			<Box>
				<Button onClick={onClickTogether} buttonText={__('Edit all prices together')} />
				<p>{__('Edit all the selected ticket prices dynamically')}</p>
			</Box>
			<Divider orientation='vertical' height='50%' />
			<Box>
				<Button onClick={onClickSeparate} buttonText={__('Edit prices individually')} />
				<p>{__('Edit prices for each ticket individually')}</p>
			</Box>
		</Box>
	);
};
