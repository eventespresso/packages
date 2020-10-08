import React from 'react';
import classNames from 'classnames';

import type { TableDataCellProps } from './types';

const TableDataCell: React.FC<TableDataCellProps> = ({
	children,
	colNumber,
	isFooterTd,
	tableDataCellClassName,
	rowNumber,
	...props
}) => {
	const id = props.id
		? `${props.id}-row-${rowNumber}-col-${colNumber}`
		: `ee-rspnsv-table-row-${rowNumber}-col-${colNumber}`;

	const className = classNames(
		tableDataCellClassName,
		`ee-rspnsv-table-${isFooterTd ? 'footer' : 'body'}-td`,
		`ee-col-${colNumber}`,
		props.className.bodyTdClassName
	);

	const tableDataProps: React.HTMLAttributes<HTMLElement> = {
		...props,
		className,
		id,
	};

	return <td {...tableDataProps}>{children}</td>;
};

export default TableDataCell;
