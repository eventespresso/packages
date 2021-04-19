import { useCallback, useMemo } from 'react';

import { __ } from '@eventespresso/i18n';

import { AttendeesEditProps } from '../types';
import { useTickets } from '@blocksServices/apollo';
import { buildEntitySelectOptions } from '@blocksServices/utils';
import { Select as SelectControl } from '../../adapters';

const SelectTicket: React.FC<AttendeesEditProps> = ({ attributes, setAttributes }) => {
	const { datetime, ticket } = attributes;
	const { data, loading, error } = useTickets(datetime);

	const list = useMemo(() => data?.espressoTickets?.nodes || [], [data?.espressoTickets?.nodes]);
	const options = useMemo(() => buildEntitySelectOptions(list, loading, error), [error, list, loading]);

	const onChange = useCallback((ticket): void => setAttributes({ ticket }), [setAttributes]);

	return (
		<SelectControl
			id='attendees-select-ticket'
			label={__('Select Ticket')}
			value={ticket}
			options={options}
			onChange={onChange}
		/>
	);
};

export default SelectTicket;
