import { useState, useCallback } from 'react';

import { __ } from '@eventespresso/i18n';
import { entityListToSelectOptions } from '@eventespresso/utils';
import type { Entity } from '@eventespresso/data';

import { Button } from '../Button';
import { Select } from '../Select';
import { EntityOptionsRow } from './EntityOptionsRow';
import { EntityTemplateProps } from './types';

const EntityTemplate = <E extends Entity>({ addEntity, templates, onAddNew }: EntityTemplateProps<E>) => {
	const [selectedEntityId, setSelectedEntityId] = useState('');

	const onChangeValue = useCallback((value) => setSelectedEntityId(value), []);
	const options = entityListToSelectOptions(templates, { label: __('Select…'), value: '' });

	const entity = templates.find(({ id }) => selectedEntityId === id);

	const onClick = useCallback(() => addEntity(entity), [addEntity, entity]);

	const selectExistingID = 'existing-entity';

	const selectExisting = (
		<>
			<Select id={selectExistingID} options={options} onChangeValue={onChangeValue} />
			<Button buttonText={__('Add')} onClick={onClick} isDisabled={!selectedEntityId} />
		</>
	);

	return <EntityOptionsRow onAddNew={onAddNew} selectExisting={selectExisting} selectExistingID={selectExistingID} />;
};

export default EntityTemplate;
