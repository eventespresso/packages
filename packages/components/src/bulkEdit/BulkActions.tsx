import React, { useState, useCallback } from 'react';
import { __ } from '@wordpress/i18n';
import { ActionCheckboxProps } from './ActionCheckbox';
import { useBulkEdit } from '@eventespresso/services';

import { Button, SelectInput, SelectInputProps } from '../';
import './styles.scss';

export interface BulkActionsProps<T extends string = string> {
	Checkbox?: React.FC<ActionCheckboxProps>;
	defaultAction?: T;
	onApply: (action: T) => void;
	options: SelectInputProps['options'];
}

export const BulkActions = <T extends string>({
	Checkbox,
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
		<div className='ee-bulk-edit-actions__wrapper'>
			<SelectInput value={action} options={options} onChangeValue={setValue} />
			<div className={'ee-bulk-edit-actions__mobile-checkbox'}>
				<Checkbox label={__('select all')} />
			</div>
			<Button onClick={onClick} buttonText={__('apply')} isDisabled={isApplyDisabled} />
		</div>
	);
};
