import React from 'react';
import { SelectControl } from '@wordpress/components';
import { __ } from '@eventespresso/i18n';

import type { AttendeesEditProps } from '../types';
import { useEvents } from '@blocksServices/apollo';
import { buildEntitySelectOptions } from '@blocksServices/utils';
import type { SelectControlProps } from '@blocksComponents/types';

const SelectEvent: React.FC<AttendeesEditProps> = ({ attributes, setAttributes }) => {
	const { event } = attributes;

	const { data, loading, error } = useEvents();

	const list = data?.espressoEvents?.nodes || [];
	const options = buildEntitySelectOptions(list, loading, error);

	return (
		<SelectControl
			label={__('Select Event')}
			value={event}
			options={options as SelectControlProps['options']}
			onChange={(event): void => setAttributes({ event, datetime: '', ticket: '' })}
		/>
	);
};

export default SelectEvent;
