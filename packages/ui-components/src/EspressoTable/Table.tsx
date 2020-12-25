import { useMemo } from 'react';

import classNames from 'classnames';

import { Box, BoxProps } from '@eventespresso/adapters';
import type { TableProps } from './types';

const overflowX: BoxProps['overflowX'] = { sm: 'auto', md: 'visible' };

const Table: React.FC<TableProps> = ({ captionID = '', captionText = '', children, tableId = '', ...props }) => {
	const className = classNames(props.className, 'ee-rspnsv-table');
	const tableProps = useMemo<React.HTMLAttributes<HTMLElement>>(
		() => ({
			...props,
			className,
			id: tableId,
		}),
		[className, props, tableId]
	);

	return (
		<Box
			aria-labelledby={captionID}
			className='ee-rspnsv-table__inner-wrapper'
			overflowX={overflowX}
			role='region'
			tabIndex={0}
		>
			<table {...tableProps}>
				<caption id={captionID} className={'screen-reader-text'}>
					{captionText}
				</caption>
				{children}
			</table>
		</Box>
	);
};

export default Table;
