import classNames from 'classnames';
import type { Cell, GetCell } from '../types';

import './cell.scss';

export const getCell = ({ key, size, showValueOnMobile, textAlign, value, ...props }: GetCell): Cell => {
	const className = classNames(
		'ee-table-cell',
		size && `ee-table-cell--size-${size}`,
		textAlign && `ee-table-cell--text-align-${textAlign}`,
		props.className
	);

	return {
		className,
		key,
		type: 'cell',
		value: showValueOnMobile ? <div className='ee-rspnsv-table-show-on-mobile'>{value}</div> : value,
	};
};
