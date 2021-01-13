import { __, sprintf } from '@eventespresso/i18n';
import { Plus } from '@eventespresso/icons';
import { Button, Select, SelectProps } from '@eventespresso/ui-components';

import './style.scss';

interface EntityOptionsRowProps {
	afterOptions?: React.ReactNode;
	isSelectButtonDisabled?: boolean;
	onAddNew: VoidFunction;
	onSelect: VoidFunction;
	onSelectChange: SelectProps['onChangeValue'];
	options: SelectProps['options'];
	type: 'datetime' | 'ticket';
}

export const EntityOptionsRow: React.FC<EntityOptionsRowProps> = ({
	afterOptions,
	isSelectButtonDisabled,
	onAddNew,
	onSelect,
	onSelectChange,
	options,
	type,
}) => {
	const entityType = type === 'datetime' ? __('datetime') : __('ticket');
	const addNewID = `ee-add-new-${type}`;
	const addNewDescribedByID = `${addNewID}-description`;
	const selectExistingID = `existing-${type}`;
	const selectExisting = (
		<>
			<Select id={selectExistingID} options={options} onChangeValue={onSelectChange} />
			<Button
				buttonText={type === 'datetime' ? __('Select') : __('Add')}
				noVerticalMargin
				onClick={onSelect}
				isDisabled={isSelectButtonDisabled}
			/>
		</>
	);

	return (
		<div className='ee-entity-option__wrapper'>
			<div className='ee-entity-option__options'>
				<div className='ee-entity-option__option'>
					<label className={'ee-focus-priority-5'} htmlFor={`ee-select-${selectExistingID}`}>
						{
							/* translators: Select an existing "date / ticket" to use as a template */
							sprintf(__('Select an existing %s to use as a template.'), entityType)
						}
					</label>
					<div className='ee-entity-option__input'>{selectExisting}</div>
				</div>
				<div className='ee-entity-option__separator'>{__('or')}</div>
				<div className='ee-entity-option__option'>
					<label className={'ee-focus-priority-5'} id={addNewDescribedByID}>
						{
							/* translators: Add new "date / ticket" and insert details manually */
							sprintf(__('Add new %s and insert details manually'), entityType)
						}
					</label>
					<Button
						aria-describedby={addNewDescribedByID}
						buttonText={__('Add New')}
						icon={Plus}
						id={addNewID}
						onClick={onAddNew}
					/>
				</div>
			</div>
			{afterOptions}
		</div>
	);
};
