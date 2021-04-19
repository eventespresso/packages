import { useCallback, useMemo } from 'react';

import { __ } from '@eventespresso/i18n';

import { AttendeesEditProps } from '../types';
import { useDatetimes } from '@blocksServices/apollo';
import { buildEntitySelectOptions } from '@blocksServices/utils';
import { Select as SelectControl } from '../../adapters';

const SelectDatetime: React.FC<AttendeesEditProps> = ({ attributes, setAttributes }) => {
	const { datetime, event } = attributes;

	const { data, loading, error } = useDatetimes(event);

	const list = useMemo(() => data?.espressoDatetimes?.nodes || [], [data?.espressoDatetimes?.nodes]);
	const options = useMemo(() => buildEntitySelectOptions(list, loading, error), [error, list, loading]);
	const onChange = useCallback((datetime): void => setAttributes({ datetime, ticket: '' }), [setAttributes]);

	return (
		<SelectControl
			id='attendees-select-datetime'
			label={__('Select Datetime')}
			value={datetime}
			options={options}
			onChange={onChange}
		/>
	);
};

export default SelectDatetime;
