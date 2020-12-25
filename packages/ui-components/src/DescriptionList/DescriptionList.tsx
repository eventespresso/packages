import React from 'react';
import classNames from 'classnames';

import DescriptionListItem from './DescriptionListItem';
import type { DescriptionListProps } from './types';

import './styles.scss';

const DescriptionList: React.FC<DescriptionListProps> = ({
	columnsPerRow,
	direction,
	dataSource,
	termWhiteBg,
	...props
}) => {
	const className = classNames(
		'ee-description-list-grid',
		direction && `ee-description-list-grid--${direction}`,
		columnsPerRow && `ee-description-list-columns-per-row--${columnsPerRow}`,
		termWhiteBg && `ee-description-list-item-term--white-bg`,
		props.className
	);

	return (
		<dl className={className}>
			{dataSource.map((itemProps, i) => (
				<DescriptionListItem key={i} {...itemProps} />
			))}
		</dl>
	);
};

export default DescriptionList;
