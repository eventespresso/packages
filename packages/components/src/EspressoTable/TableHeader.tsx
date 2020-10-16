import React, { useMemo } from 'react';
import classNames from 'classnames';
import invariant from 'invariant';

import TableRow from './TableRow';
import TableHeaderCell from './TableHeaderCell';

import type { TableHeaderProps } from './types';
import { RowType } from './types';

const TableHeader: React.FC<TableHeaderProps> = ({ headerRows, showDragHandle, tableId, ...props }) => {
	const className = classNames(props.className.headerClassName, 'ee-rspnsv-table-header');
	const theadProps = useMemo<React.HTMLAttributes<HTMLElement>>(
		() => ({
			...props,
			className,
		}),
		[className, props]
	);

	return (
		<thead {...theadProps}>
			{headerRows.map((headerRow, row) => (
				<TableRow
					className={props.className}
					id={headerRow.id || `${tableId}-header`}
					headerRowClassName={headerRow.className || ''}
					key={`header-row-${row}`}
					rowData={headerRow}
					rowNumber={row}
					rowType={RowType.header}
				>
					{headerRow.cells.map((column, col) => {
						invariant(column.hasOwnProperty('value'), `Missing "value" property for header column ${col}.`);

						return typeof column?.render === 'function' ? (
							column.render({ row, col, column })
						) : (
							<TableHeaderCell
								className={props.className}
								colNumber={col}
								key={`row-${row}-col-${col}`}
								rowNumber={row}
								rowType={RowType.header}
								id={column.id || `${tableId}-header-cell`}
								tableHeaderCellClassName={column.className}
							>
								{column.value || ''}
							</TableHeaderCell>
						);
					})}

					{showDragHandle && (
						<TableHeaderCell
							className={props.className}
							colNumber={headerRow.cells.length}
							key={`row-${row}-col-${headerRow.cells.length}`}
							rowNumber={row}
							rowType={RowType.header}
							id={`${tableId}-header-cell-draghandle`}
						/>
					)}
				</TableRow>
			))}
		</thead>
	);
};

export default TableHeader;
