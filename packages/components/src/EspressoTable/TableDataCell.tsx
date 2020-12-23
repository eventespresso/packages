import React from 'react';
import classNames from 'classnames';

import type { TableDataCellProps } from './types';

const TableDataCell: React.FC<TableDataCellProps> = ({
	children,
	colNumber,
	rowNumber,
	rowType,
	tableDataCellClassName,
	...props
}) => {
	const id = props.id
		? `${props.id}-row-${rowNumber}-col-${colNumber}`
		: `ee-rspnsv-table-row-${rowNumber}-col-${colNumber}`;

	const className = classNames(
		tableDataCellClassName,
		`ee-rspnsv-table-${rowType}-td`,
		`ee-col-${colNumber}`,
		props.className.bodyTdClassName
	);

	return (
		<td {...props} className={className} id={id}>
			{children}
		</td>
	);
};

export default TableDataCell;
