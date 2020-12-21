import React, { useState, useCallback } from 'react';

import { __ } from '@eventespresso/i18n';
import { useBulkEdit } from '@eventespresso/services';

import { Button, LabelPosition, Select } from '../';
import type { ActionCheckboxProps } from './ActionCheckbox';
import type { SelectProps } from '../';

import './styles.scss';

export interface BulkActionsProps<T extends string = string> {
	Checkbox?: React.ComponentType<ActionCheckboxProps>;
	defaultAction?: T;
	id?: string;
	onApply: (action: T) => void;
	options: SelectProps['options'];
}

const rootProps = { className: 'ee-bulk-edit-actions__select-wrapper' };

export const BulkActions = <T extends string>({
	Checkbox,
	defaultAction,
	id,
	options,
	onApply,
}: BulkActionsProps<T>): JSX.Element => {
	const [action, setAction] = useState<T>(defaultAction);
	const { getSelected } = useBulkEdit();

	const setValue = useCallback((value) => setAction(value), []);

	const isApplyDisabled = !action || !getSelected().length;

	const onClick = useCallback(() => {
		onApply?.(action);
	}, [action, onApply]);

	return (
		<div className='ee-bulk-edit-actions__wrapper'>
			<Select
				aria-label={__('bulk actions')}
				className='ee-bulk-edit-actions__select'
				id={id || 'ee-bulk-edit-actions-select-input'}
				label={__('bulk actions')}
				labelPosition={'top-left' as LabelPosition}
				onChangeValue={setValue}
				options={options}
				rootProps={rootProps}
				value={action}
			/>
			<div className={'ee-bulk-edit-actions__mobile-checkbox'}>
				<Checkbox label={__('select all')} />
			</div>
			<Button buttonText={__('apply')} isDisabled={isApplyDisabled} noVerticalMargin onClick={onClick} />
		</div>
	);
};
