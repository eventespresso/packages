import { useState, useCallback } from 'react';

import { __ } from '@eventespresso/i18n';
import { CheckboxProps } from '@eventespresso/adapters';

import { Button, SelectWithLabel, SelectProps } from '../';

import './styles.scss';

export interface BulkActionsProps<T extends string = string> {
	Checkbox?: React.ComponentType<CheckboxProps>;
	defaultAction?: T;
	id: string;
	isApplyDisabled?: boolean;
	onApply: (action: T) => void;
	options: SelectProps['options'];
}

const rootProps = { className: 'ee-bulk-edit-actions__select-wrapper' };

export const BulkActions = <T extends string>({
	Checkbox,
	defaultAction,
	id,
	isApplyDisabled,
	options,
	onApply,
}: BulkActionsProps<T>): JSX.Element => {
	const [action, setAction] = useState<T>(defaultAction);

	const setValue = useCallback((value) => setAction(value), []);

	const onClick = useCallback(() => {
		onApply?.(action);
	}, [action, onApply]);

	return (
		<div className='ee-bulk-edit-actions__wrapper'>
			<SelectWithLabel
				aria-label={__('bulk actions')}
				className='ee-bulk-edit-actions__select'
				id={id}
				label={__('bulk actions')}
				labelPosition='top-left'
				onChangeValue={setValue}
				options={options}
				rootProps={rootProps}
				value={action}
			/>
			<div className={'ee-bulk-edit-actions__mobile-checkbox'}>
				<Checkbox label={__('select all')} />
			</div>
			<Button
				buttonText={__('apply')}
				isDisabled={isApplyDisabled || !action}
				noVerticalMargin
				onClick={onClick}
			/>
		</div>
	);
};
