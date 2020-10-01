import React from 'react';

import { Plus } from '@eventespresso/icons';
import { Button } from '@eventespresso/components';
import { __, sprintf } from '@eventespresso/i18n';
import './style.scss';

interface EntityOptionsRowProps {
	afterOptions?: React.ReactNode;
	onAddNew: VoidFunction;
	selectExisting: React.ReactNode;
	selectExistingID: string;
	type: 'datetime' | 'ticket';
}

const EntityOptionsRow: React.FC<EntityOptionsRowProps> = ({
	afterOptions,
	onAddNew,
	selectExisting,
	selectExistingID,
	type,
}) => {
	const entityType = type === 'datetime' ? __('datetime') : __('ticket');
	const addNewID = `ee-add-new-${type}`;
	const describedbyID = `${addNewID}-description`;

	return (
		<div className='ee-entity-option__wrapper'>
			<div className='ee-entity-option__options'>
				<div className='ee-entity-option__option'>
					<label className={'ee-focus-priority-5'} htmlFor={'ee-select-' + selectExistingID}>
						{
							/* translators: select an existing "date / ticket" to use as a template */
							sprintf(__('select an existing %s to use as a template.'), entityType)
						}
					</label>
					<div className='ee-entity-option__input'>{selectExisting}</div>
				</div>
				<div className='ee-entity-option__separator'>{__('or')}</div>
				<div className='ee-entity-option__option'>
					<label className={'ee-focus-priority-5'} id={describedbyID}>
						{
							/* translators: Add new "date / ticket" and insert details manually */
							sprintf(__('Add new %s and insert details manually'), entityType)
						}
					</label>
					<div className='ee-entity-option__input'>
						<Button
							aria-describedby={describedbyID}
							buttonText={__('Add New')}
							id={addNewID}
							icon={Plus}
							onClick={onAddNew}
						/>
					</div>
				</div>
			</div>
			{afterOptions}
		</div>
	);
};

export default EntityOptionsRow;
