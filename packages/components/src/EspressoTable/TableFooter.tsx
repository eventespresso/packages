import React from 'react';
import classNames from 'classnames';
import invariant from 'invariant';

import { isFunc, isEmpty } from '@eventespresso/utils';

import TableRow from './TableRow';
import TableHeaderCell from './TableHeaderCell';

import type { TableFooterProps } from './types';
import { RowType } from './types';

const TableFooter: React.FC<TableFooterProps> = ({ tableId, footerRows, rowCount, ...props }) => {
	const className = classNames(props?.className?.footerClassName, 'ee-rspnsv-table-footer');

	return !isEmpty(footerRows) ? (
		<tfoot className={className}>
			{footerRows.map((footerRow, index) => {
				const row = index + rowCount;

				return (
					<TableRow
						rowData={footerRow}
						key={`row-${row}`}
						rowNumber={row}
						rowType={RowType.footer}
						id={footerRow.id || `${tableId}-footer`}
						rowClassName={footerRow.footerRowClassName}
						className={props.className}
					>
						{footerRow.cells.map((column, col) => {
							invariant(
								column.hasOwnProperty('value'),
								`Missing "value" property for footer column ${col}.`
							);

							return isFunc(column.render) ? (
								column.render({ row, col, column })
							) : (
								<TableHeaderCell
									className={props.className}
									colNumber={col}
									id={column.id || `${tableId}-footer-cell`}
									key={`row-${row}-col-${col}`}
									rowNumber={row}
									rowType={RowType.footer}
									scope={column.scope}
									tableHeaderCellClassName={column.className}
								>
									{column.value || ''}
								</TableHeaderCell>
							);
						})}
					</TableRow>
				);
			})}
		</tfoot>
	) : null;
};

export default TableFooter;
