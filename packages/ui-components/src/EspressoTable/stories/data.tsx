import { Checkbox } from '../../';
import type { BodyRow, HeaderRow } from '../types';

export const bodyRows: BodyRow[] = [
	{
		cells: [
			{
				className:
					'ee-date-list-cell ee-entity-list-status-stripe ee-status-background-color-DTU ee-rspnsv-table-column-nano',
				key: 'stripe',
				type: 'cell',
				value: 'name',
			},
			{
				className: 'ee-date-list-cell ee-date-list-col-checkbox ee-rspnsv-table-column-micro',
				key: 'checkbox',
				type: 'cell',
				value: <Checkbox />,
			},

			{
				className:
					'ee-date-list-cell ee-date-list-col-id ee-rspnsv-table-column-nano ee-number-column ee-zebra-stripe-on-mobile',
				key: 'id',
				type: 'cell',
				value: 201,
			},
			{
				className:
					'ee-date-list-cell ee-date-list-col-name ee-col-name ee-rspnsv-table-column-bigger ee-rspnsv-table-hide-on-mobile',
				key: 'name',
				type: 'cell',
				value: 123,
			},

			{
				className: 'ee-date-list-cell ee-rspnsv-table-column-default',
				key: 'start',
				type: 'cell',
				value: 'Mon Jan 11, 10:00 AM',
			},

			{
				className:
					'ee-date-list-cell ee-date-list-col-capacity ee-rspnsv-table-column-tiny ee-number-column ee-col-5 ee-zebra-stripe-on-mobile',
				key: 'capacity',
				type: 'cell',
				value: 11,
			},
			{
				className: 'ee-date-list-cell ee-rspnsv-table-column-tiny ee-centered-column ee-col-5',
				key: 'recurrence-series',
				type: 'cell',
				value: 11,
			},
			{
				className: 'ee-date-list-cell ee-date-list-col-sold ee-rspnsv-table-column-tiny ee-number-column',
				key: 'sold',
				type: 'cell',
				value: 0,
			},
			{
				className:
					'ee-date-list-cell ee-date-list-col-registrations ee-rspnsv-table-column-smaller ee-centered-column ee-zebra-stripe-on-mobile',
				key: 'registrations',
				type: 'cell',
				value: 0,
			},
			{
				className: 'ee-date-list-cell ee-date-list-col-actions ee-actions-column ee-rspnsv-table-column-big',
				key: 'actions',
				type: 'cell',
				value: 11,
			},
		],
		className: 'ee-editor-date-list-view-row DTU',
		id: 'ee-editor-date-list-view-row-RGF0ZXRpbWU6MjAx',
		key: 'row-RGF0ZXRpbWU6MjAx',
		type: 'row',
	},
];

export const headerRows: HeaderRow[] = [
	{
		className: 'ee-editor-date-list-items-header-row',
		key: 'dates-list-header',
		primary: true,
		type: 'row',
		cells: [
			{
				key: 'stripe',
				type: 'cell',
				className: 'ee-date-list-col-hdr ee-entity-list-status-stripe ee-rspnsv-table-column-nano',
				value: '',
			},
			{
				key: 'checkbox',
				type: 'cell',
				className: 'ee-date-list-col-hdr ee-date-list-col-checkbox ee-rspnsv-table-column-micro',
				value: 1,
			},
			{
				key: 'id',
				type: 'cell',
				className: 'ee-date-list-col-hdr ee-date-list-col-id ee-number-column ee-rspnsv-table-column-nano',
				value: 'ID',
			},
			{
				key: 'name',
				type: 'cell',
				className: 'ee-date-list-col-hdr ee-date-list-col-name ee-rspnsv-table-column-huge',
				value: 'Name',
			},
			{ key: 'start', type: 'cell', className: 'ee-date-list-col-hdr ee-rspnsv-table-column-default', value: 1 },
			{
				key: 'capacity',
				type: 'cell',
				className:
					'ee-date-list-col-hdr ee-date-list-col-capacity ee-rspnsv-table-column-tiny ee-number-column',
				value: 1,
			},
			{
				key: 'recurrence-series',
				type: 'cell',
				className: 'ee-date-list-cell ee-rspnsv-table-column-tiny ee-centered-column ee-col-5',
				value: 1,
			},
			{
				key: 'sold',
				type: 'cell',
				className: 'ee-date-list-col-hdr ee-date-list-col-sold ee-rspnsv-table-column-tiny ee-number-column',
				value: 'Sold',
			},
			{
				key: 'registrations',
				type: 'cell',
				className:
					'ee-date-list-col-hdr ee-date-list-col-registration…ee-rspnsv-table-column-smaller ee-centered-column',
				value: 1,
			},
			{
				key: 'actions',
				type: 'cell',
				className: 'ee-date-list-col-hdr ee-actions-column ee-rspnsv-table-column-big ee-centered-column',
				value: 1,
			},
		],
	},
];
