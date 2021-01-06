import classNames from 'classnames';

import type { Cell, CellData } from '../types';

import '../style/cell.scss';

export const enhanceCell = ({ key, size, showValueOnMobile, textAlign, value, ...props }: CellData): Cell => {
	const className = classNames(
		'ee-table-cell',
		size && `ee-table-cell--size-${size}`,
		textAlign && `ee-table-cell--text-align-${textAlign}`,
		props.className
	);

	return {
		...props,
		className,
		key,
		type: 'cell',
		value: showValueOnMobile ? <div className='ee-rspnsv-table-show-on-mobile'>{value}</div> : value,
	};
};
