import { useMemo } from 'react';

import classNames from 'classnames';
import invariant from 'invariant';

import TableRow from './TableRow';
import TableHeaderCell from './TableHeaderCell';
import { enhanceCell } from './utils';

import type { TableHeaderProps } from './types';
import { RowType } from './types';

const TableHeader: React.FC<TableHeaderProps> = ({ headerRows, tableId, ...props }) => {
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
					{headerRow?.cells.map(enhanceCell).map((column, col) => {
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
				</TableRow>
			))}
		</thead>
	);
};

export default TableHeader;
