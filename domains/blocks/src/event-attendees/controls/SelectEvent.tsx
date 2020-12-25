import { useCallback, useMemo } from 'react';

import { __ } from '@eventespresso/i18n';

import type { AttendeesEditProps } from '../types';
import { useEvents } from '@blocksServices/apollo';
import { buildEntitySelectOptions } from '@blocksServices/utils';
import { Select as SelectControl } from '../../adapters';

const SelectEvent: React.FC<AttendeesEditProps> = ({ attributes, setAttributes }) => {
	const { event } = attributes;

	const { data, loading, error } = useEvents();

	const list = useMemo(() => data?.espressoEvents?.nodes || [], [data?.espressoEvents?.nodes]);
	const options = useMemo(() => buildEntitySelectOptions(list, loading, error), [error, list, loading]);
	const onChange = useCallback((event): void => setAttributes({ event, datetime: '', ticket: '' }), [setAttributes]);

	return (
		<SelectControl
			id='attendees-select-event'
			label={__('Select Event')}
			value={event}
			options={options}
			onChange={onChange}
		/>
	);
};

export default SelectEvent;
