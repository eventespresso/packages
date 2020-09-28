import React from 'react';
import classNames from 'classnames';

import DescriptionListItem from './DescriptionListItem';
import type { DescriptionListProps } from './types';
import './styles.scss';

const DescriptionList: React.FC<DescriptionListProps> = ({ columnsPerRow, direction, dataSource, termWhiteBg }) => {
	const className = classNames(
		'ee-description-list-grid',
		direction && `ee-description-list-grid--${direction}`,
		columnsPerRow && `ee-description-list-columns-per-row--${columnsPerRow}`,
		termWhiteBg && `ee-description-list-item-term--white-bg`
	);

	return (
		<dl className={className}>
			{dataSource.map((props, i) => (
				<DescriptionListItem key={i} {...props} />
			))}
		</dl>
	);
};

export default DescriptionList;
