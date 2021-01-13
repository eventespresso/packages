import { useState, useCallback, useMemo } from 'react';

import { __ } from '@eventespresso/i18n';
import { EntityOptionsRow } from '@eventespresso/ee-components';
import { entityListToSelectOptions, AnyObject } from '@eventespresso/utils';
import { useDatetimes, useDatetimeItem } from '@eventespresso/edtr-services';

interface DateTemplateProps {
	setTemplate: (date: AnyObject) => void;
}

const DateTemplate: React.FC<DateTemplateProps> = ({ setTemplate }) => {
	const [selectedDateId, setSelectedDateId] = useState('');
	const onSelectChange = useCallback((value) => setSelectedDateId(value), []);
	const allDates = useDatetimes();

	const options = useMemo(() => entityListToSelectOptions(allDates, { label: __('Select…'), value: '' }), [allDates]);
	const datetime = useDatetimeItem({ id: selectedDateId });
	const onAddNew = useCallback(() => setTemplate(datetime || {}), [datetime, setTemplate]);

	return (
		<EntityOptionsRow
			isSelectButtonDisabled={!selectedDateId}
			onAddNew={onAddNew}
			onSelect={onAddNew}
			onSelectChange={onSelectChange}
			options={options}
			type={'datetime'}
		/>
	);
};

export default DateTemplate;
