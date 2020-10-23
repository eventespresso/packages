/**
 * This file registers the filters for dates table via registry package
 */
import React from 'react';
import { insert } from 'ramda';

import { __ } from '@eventespresso/i18n';
import { EntityTableFilters } from '@eventespresso/registry';
import { datesList, domain } from '@eventespresso/edtr-services';
import type { DatetimesFilterStateManager } from '@eventespresso/edtr-services';
import type { Cell } from '@eventespresso/components';
import RecurrenceTag from '../../ui/RecurrenceTag';

type Domain = typeof domain;
type DFSM = DatetimesFilterStateManager;

const { registerFilter } = new EntityTableFilters<Domain, typeof datesList, DFSM>(domain, datesList);

const cell: Cell = {
	key: 'recurrence-series',
	type: 'cell',
	className: 'ee-date-list-cell ee-rspnsv-table-column-tiny ee-centered-column ee-col-5',
	value: null,
};

// Register sales filter
registerFilter(({ row, type, entityId }) => {
	let value: React.ReactNode;
	if (type === 'body') {
		value = <RecurrenceTag datetimeId={entityId} isTableView />;
	} else if (type === 'header') {
		value = (
			<div className='text-center'>
				<span className={'ee-rspnsv-table-long-label'}>{__('Recurring series')}</span>
				<span className={'ee-rspnsv-table-short-label'}>{__('Series')}</span>
			</div>
		);
	}
	// insert the cell at index 6
	const cells = insert(6, { ...cell, value }, row.cells);
	return { ...row, cells };
}, 11);
