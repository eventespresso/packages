import React, { useCallback, useMemo } from 'react';
import { SelectControl } from '@wordpress/components';
import { __ } from '@eventespresso/i18n';

import type { AttendeesEditProps } from '../types';
import { useEvents } from '@blocksServices/apollo';
import { buildEntitySelectOptions } from '@blocksServices/utils';
import type { SelectControlProps } from '@blocksComponents/types';

const SelectEvent: React.FC<AttendeesEditProps> = ({ attributes, setAttributes }) => {
	const { event } = attributes;

	const { data, loading, error } = useEvents();

	const list = useMemo(() => data?.espressoEvents?.nodes || [], [data?.espressoEvents?.nodes]);
	const options = useMemo(() => buildEntitySelectOptions(list, loading, error), [error, list, loading]);
	const onChange = useCallback((event): void => setAttributes({ event, datetime: '', ticket: '' }), [setAttributes]);

	return (
		<SelectControl
			label={__('Select Event')}
			value={event}
			options={options as SelectControlProps['options']}
			onChange={onChange}
		/>
	);
};

export default SelectEvent;
