import { useMemo } from 'react';

import classNames from 'classnames';

import { Tooltip } from '../';
import type { ItemCountProps } from './types';

import './style.scss';

export const ItemCount: React.FC<ItemCountProps> = ({
	children,
	count,
	emphasizeZero = true,
	title = ' ',
	zeroCountChar,
	...props
}) => {
	const className = classNames(props.className, 'ee-item-count', {
		'ee-item-count--has-items': count > 0,
		'ee-item-count--no-items': count === 0 && emphasizeZero,
	});
	const offset = useMemo(() => props.offset || [-8, -4], [props.offset]);
	const value = count === 0 && typeof zeroCountChar !== 'undefined' ? zeroCountChar : count;
	const countNode = (
		<Tooltip placement='top' tooltip={title}>
			<span>{value}</span>
		</Tooltip>
	);

	const style = useMemo(() => ({ right: `${offset[0]}px`, top: `${offset[1]}px` }), [offset]);

	return (
		<div className='ee-item-count__wrapper'>
			<div className={className} style={style}>
				{countNode}
			</div>
			{children}
		</div>
	);
};

export default ItemCount;
