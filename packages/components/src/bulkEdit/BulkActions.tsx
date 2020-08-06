import React, { useState, useCallback } from 'react';
import { __ } from '@wordpress/i18n';

import { Button, SelectInput, SelectInputProps } from '../';
import { Box } from '@eventespresso/adapters';
import { useBulkEdit } from '@eventespresso/services';

export interface BulkActionsProps<T extends string = string> {
	options: SelectInputProps['options'];
	onApply: (action: T) => void;
	defaultAction?: T;
}

export const BulkActions = <T extends string>({
	defaultAction,
	options,
	onApply,
}: BulkActionsProps<T>): JSX.Element => {
	const [action, setAction] = useState<T>(defaultAction);
	const { getSelected } = useBulkEdit();

	const setValue = useCallback((value) => setAction(value), []);

	const isApplyDisabled = !action || !getSelected().length;

	const onClick = useCallback(() => {
		onApply(action);
	}, [action, onApply]);

	return (
		<Box display='flex' alignItems='center' maxWidth='fit-content'>
			<SelectInput value={action} options={options} onChangeValue={setValue} />
			<Button onClick={onClick} buttonText={__('apply')} isDisabled={isApplyDisabled} />
		</Box>
	);
};
