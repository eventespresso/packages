import React from 'react';
import { __ } from '@eventespresso/i18n';

import useGetBodyRows from './useGetBodyRows';
import useGetHeaderRows from './useGetHeaderRows';
import { DatesAndTickets } from '../../types';
import { ResponsiveTable } from '@eventespresso/components';
import { useMemoStringify } from '@eventespresso/hooks';

import './styles.scss';

const Table: React.FC<DatesAndTickets> = ({ datetimes, tickets }) => {
	const bodyRows = useGetBodyRows({ datetimes, tickets });
	const className = useMemoStringify({ tableClassName: 'ticket-assignment-manager' });
	const headerRows = useGetHeaderRows(tickets);
	const metaData = useMemoStringify({
		isScrollable: true,
		tableId: 'ticket-assignment-manager-table',
		tableCaption: __('Ticket Assignment Manager'),
	});

	return <ResponsiveTable bodyRows={bodyRows} headerRows={headerRows} metaData={metaData} className={className} />;
};

export default Table;
