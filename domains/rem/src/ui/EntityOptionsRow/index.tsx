import React from 'react';
import { __, sprintf } from '@wordpress/i18n';

import './style.scss';

interface EntityOptionsRowProps {
	addNew: React.ReactNode;
	addNewID: string;
	afterOptions?: React.ReactNode;
	selectExisting: React.ReactNode;
	selectExistingID: string;
	type: 'datetime' | 'ticket';
}

const EntityOptionsRow: React.FC<EntityOptionsRowProps> = ({
	addNew,
	addNewID,
	afterOptions,
	selectExisting,
	selectExistingID,
	type,
}) => {
	return (
		<div className='ee-entity-option__wrapper'>
			<div className='ee-entity-option__options'>
				<div className='ee-entity-option__option'>
					<label className={'ee-focus-priority-5'} htmlFor={addNewID}>
						{sprintf(__('select an existing %s to use as a template.'), type)}
					</label>
					<div className='ee-entity-option__input'>{selectExisting}</div>
				</div>
				<div className='ee-entity-option__separator'>{__('or')}</div>
				<div className='ee-entity-option__option'>
					<label className={'ee-focus-priority-5'} htmlFor={selectExistingID}>
						{sprintf(__('Add new %s and insert details manually'), type)}
					</label>
					<div className='ee-entity-option__input'>{addNew}</div>
				</div>
			</div>
			{afterOptions}
		</div>
	);
};

export default EntityOptionsRow;
