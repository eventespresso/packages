import classNames from 'classnames';

import { useMemoStringify } from '@eventespresso/hooks';

import { ResponsiveTable } from '../EspressoTable';
import type { EntityTableProps } from './types';

const EntityTable: React.FC<EntityTableProps> = ({ bodyRows, headerRows, metaData, onDragEnd, ...props }) => {
	const className = useMemoStringify({ tableClassName: classNames(props.className, 'ee-entity-table') }, [
		props.className,
	]);

	return (
		<ResponsiveTable
			{...props}
			bodyRows={bodyRows}
			className={className}
			headerRows={headerRows}
			metaData={metaData}
			onDragEnd={onDragEnd}
		/>
	);
};

export default EntityTable;
