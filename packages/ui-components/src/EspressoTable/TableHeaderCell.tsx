import React from 'react';
import classNames from 'classnames';

import type { TableHeaderCellProps } from './types';

const TableHeaderCell: React.FC<TableHeaderCellProps> = ({
	children,
	colNumber,
	tableHeaderCellClassName = '',
	rowNumber,
	rowType,
	...props
}) => {
	const id = props.id
		? `${props.id}-${rowType}-row-${rowNumber}-col-${colNumber}`
		: `ee-rspnsv-table-${rowType}-row-${rowNumber}-col-${colNumber}`;

	const rowTypeClass = rowType + 'ThClass';

	const className = classNames(
		{
			[`${tableHeaderCellClassName} ee-rspnsv-table-${rowType}-th ee-col-${colNumber}`]: tableHeaderCellClassName,
			[`ee-rspnsv-table-${rowType}-th ee-col-${colNumber}`]: !tableHeaderCellClassName,
		},
		props.className[rowTypeClass]
	);

	const role = rowType === 'header' ? 'columnheader' : props.role;
	const scope = rowType === 'header' ? 'col' : rowType === 'body' ? 'row' : props.scope;

	return (
		<th {...props} className={className} id={id} role={role} scope={scope}>
			{children}
		</th>
	);
};

export default TableHeaderCell;
