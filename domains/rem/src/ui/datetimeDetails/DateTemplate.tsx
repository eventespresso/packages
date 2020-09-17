import React, { useState, useCallback, useMemo } from 'react';
import { __ } from '@eventespresso/i18n';

import { Button, SelectInput } from '@eventespresso/components';
import { entityListToSelectOptions, AnyObject } from '@eventespresso/utils';
import { Plus } from '@eventespresso/icons';
import { useDatetimes, useDatetimeItem } from '@eventespresso/edtr-services';

import EntityOptionsRow from '../EntityOptionsRow';

interface DateTemplateProps {
	setTemplate: (date: AnyObject) => void;
}

const DateTemplate: React.FC<DateTemplateProps> = ({ setTemplate }) => {
	const [selectedDateId, setSelectedDateId] = useState('');
	const onChangeValue = useCallback((value) => setSelectedDateId(value), []);

	const allDates = useDatetimes();

	const options = useMemo(() => entityListToSelectOptions(allDates, { label: __('Select...'), value: '' }), [
		allDates,
	]);
	const datetime = useDatetimeItem({ id: selectedDateId });
	const onClickSet = useCallback(() => setTemplate(datetime || {}), [datetime, setTemplate]);

	const addNewID = 'ee-add-new-datetime';
	const addNew = <Button buttonText={__('Add New')} id={addNewID} icon={Plus} onClick={onClickSet} />;

	const selectExistingID = 'ee-select-existing-datetime';
	const selectExisting = (
		<>
			<SelectInput
				id={selectExistingID}
				options={options}
				onChangeValue={onChangeValue}
				margin='var(--ee-margin-smaller)'
			/>
			<Button buttonText={__('Select')} onClick={onClickSet} isDisabled={!selectedDateId} />
		</>
	);

	return (
		<EntityOptionsRow
			addNew={addNew}
			addNewID={addNewID}
			selectExisting={selectExisting}
			selectExistingID={selectExistingID}
			type={'datetime'}
		/>
	);
};

export default DateTemplate;
