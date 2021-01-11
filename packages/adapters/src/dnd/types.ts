import type {
	OnBeforeCaptureResponder,
	OnBeforeDragStartResponder,
	OnDragStartResponder,
	OnDragUpdateResponder,
	OnDragEndResponder,
} from 'react-beautiful-dnd';

export interface DragAndDropProps extends Responders {
	asContainer: 'div' | 'ol' | 'ul';
	asItem: 'div' | 'li';
	droppableId: string;
	items: any[];
}

export interface DraggableProps extends Pick<DragAndDropProps, 'asItem' | 'droppableId'> {
	content: React.ReactNode;
	index: number;
}

interface Responders {
	onBeforeCapture?: OnBeforeCaptureResponder;
	onBeforeDragStart?: OnBeforeDragStartResponder;
	onDragStart?: OnDragStartResponder;
	onDragUpdate?: OnDragUpdateResponder;
	onDragEnd?: OnDragEndResponder;
}

export interface ResponsiveCellProps {
	heading: string;
	value: string;
}

export interface ResponsiveTableProps extends Responders, CommonProps {
	bodyRows: BodyRow[];
	className?: TableClassName;
	footerRows?: FooterRow[];
	headerRows: HeaderRow[];
	instanceId?: string;
	metaData: {
		tableCaption: string;
		tableId?: string;
		hasRowHeaders?: boolean;
		isScrollable?: boolean;
	};
}

export enum RowType {
	body = 'body',
	footer = 'footer',
	header = 'header',
}

export interface TableProps {
	captionID: string;
	captionText: string;
	children: React.ReactNode;
	className?: string;
	tableId?: string;
}

export interface TableBodyProps extends Responders, CommonProps {
	bodyRows: BodyRow[];
	className: TableClassName;
	headerRowCount: number;
	hasRowHeaders: boolean;
	primaryHeader: any;
	tableId: TableId;
}

interface TableClassName {
	headerClassName?: string;
	headerRowClassName?: string;
	headerThClassName?: string;
	bodyClassName?: string;
	bodyRowClassName?: string;
	bodyThClassName?: string;
	bodyTdClassName?: string;
	footerClassName?: string;
	footerRowClassName?: string;
	footerThClassName?: string;
	tableClassName?: string;
}

export interface TableDataCellProps {
	children: React.ReactNode;
	className: TableClassName;
	colNumber: number;
	id?: string;
	htmlClassName?: string;
	rowNumber: number;
	rowType: RowType;
	tableDataCellClassName?: string;
}

export interface TableFooterProps extends CommonProps {
	className: TableClassName;
	footerRows: FooterRow[];
	tableId: string;
	rowCount: number;
}

export interface TableHeaderProps extends CommonProps {
	className: TableClassName;
	headerRows: HeaderRow[];
	tableId: TableId;
}

export interface TableHeaderCellProps {
	className: TableClassName;
	colNumber: number;
	id?: string;
	// WAI-ARIA
	role?: string;
	rowNumber: number;
	rowType?: RowType;
	scope?: string;
	tableHeaderCellClassName?: string;
}

export interface BodyRow extends CommonProps {
	cells?: CellData[];
	children?: React.ReactNode;
	className?: TableClassName | string;
	headerRows?: HeaderRow[];
	headerRowClassName?: string;
	headerRowCount?: number;
	id?: string;
	key: string;
	rowData?: any;
	rowClassName?: string;
	rowNumber?: number;
	rowType?: RowType;
	sortable?: boolean;
	type?: string;
}

export type TableRow = BodyRow | FooterRow | HeaderRow;

type TableId = string;
