import React, { useCallback, useMemo } from 'react';
import { SelectControl } from '@wordpress/components';
import { __ } from '@eventespresso/i18n';

import { AttendeesEditProps } from '../types';
import { useTickets } from '@blocksServices/apollo';
import { buildEntitySelectOptions } from '@blocksServices/utils';
import type { SelectControlProps } from '@blocksComponents/types';

const SelectTicket: React.FC<AttendeesEditProps> = ({ attributes, setAttributes }) => {
	const { datetime, ticket } = attributes;
	const { data, loading, error } = useTickets(datetime);

	const list = useMemo(() => data?.espressoTickets?.nodes || [], [data?.espressoTickets?.nodes]);
	const options = useMemo(() => buildEntitySelectOptions(list, loading, error), [error, list, loading]);

	const onChange = useCallback((ticket): void => setAttributes({ ticket }), [setAttributes]);

	return (
		<SelectControl
			label={__('Select Ticket')}
			value={ticket}
			options={options as SelectControlProps['options']}
			onChange={onChange}
		/>
	);
};

export default SelectTicket;
