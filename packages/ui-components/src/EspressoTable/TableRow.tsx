import classNames from 'classnames';

import { RowType } from './types';
import type { BodyRow } from './types';

const TableRow: React.FC<BodyRow> = ({
	children,
	rowData,
	rowNumber,
	rowClassName = '',
	className,
	rowType = RowType.body,
	...props
}) => {
	if (!rowData) {
		return null;
	}

	const id = props.id ? `${props.id}-row-${rowNumber}` : `ee-rspnsv-table-row-${rowNumber}`;
	const css = classNames(
		rowClassName,
		`ee-rspnsv-table-${rowType}-row`,
		`ee-row-${rowNumber}`,
		className[`${rowType}RowClass`]
	);

	return (
		<tr className={css} data-testid={props?.id} id={id}>
			{children}
		</tr>
	);
};

export default TableRow;
