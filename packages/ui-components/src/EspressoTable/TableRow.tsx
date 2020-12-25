import classNames from 'classnames';
import { Draggable } from 'react-beautiful-dnd';

import { DragOutlined } from '@eventespresso/icons';
import { RowType } from './types';
import type { BodyRow } from './types';

const TableRow: React.FC<BodyRow> = ({
	children,
	rowData,
	rowNumber: _rowNumber,
	headerRowCount,
	rowClassName = '',
	className,
	rowType = RowType.body,
	showDragHandle,
	sortable = false,
	...props
}) => {
	if (!rowData) {
		return null;
	}
	// clone
	let rowNumber = _rowNumber;

	const id = props.id ? `${props.id}-row-${rowNumber}` : `ee-rspnsv-table-row-${rowNumber}`;
	const css = classNames(
		rowClassName,
		`ee-rspnsv-table-${rowType}-row`,
		`ee-row-${rowNumber}`,
		className[`${rowType}RowClass`]
	);

	return sortable ? (
		<Draggable key={rowData.key} draggableId={rowData.key} index={rowNumber}>
			{({ innerRef, draggableProps, dragHandleProps }, { isDragging }) => {
				// incrementing row number here
				// because the Draggable needs
				// indexes to start at 0
				rowNumber += headerRowCount;
				return (
					<tr
						ref={innerRef}
						id={id}
						className={css}
						// eslint-disable-next-line react-perf/jsx-no-new-object-as-prop
						style={{
							...draggableProps.style,
							border: isDragging ? '1px solid var(--ee-color-bright-blue)' : 'none',
							display: isDragging ? 'table' : 'table-row',
						}}
						{...draggableProps}
						{...(!showDragHandle && dragHandleProps)}
					>
						{children}
						{showDragHandle && (
							<td {...dragHandleProps}>
								<DragOutlined />
							</td>
						)}
					</tr>
				);
			}}
		</Draggable>
	) : (
		<tr id={id} className={css}>
			{children}
		</tr>
	);
};

export default TableRow;
