import classNames from 'classnames';

import { isRTL as getRTL } from '@eventespresso/i18n';
import type { Cell, GetCell } from '../types';

import '../style/cell.scss';

export const getCell = ({ key, size, showValueOnMobile, textAlign, value, ...props }: GetCell): Cell => {
	const isRTL = getRTL();
	const textAlignClassName =
		textAlign &&
		((textAlign === 'right' && isRTL ? 'ee-table-cell--text-align-left' : 'ee-table-cell--text-align-right') ||
			`ee-table-cell--text-align-${textAlign}`);

	const className = classNames(
		'ee-table-cell',
		size && `ee-table-cell--size-${size}`,
		textAlignClassName,
		props.className
	);

	return {
		className,
		key,
		type: 'cell',
		value: showValueOnMobile ? <div className='ee-rspnsv-table-show-on-mobile'>{value}</div> : value,
	};
};
