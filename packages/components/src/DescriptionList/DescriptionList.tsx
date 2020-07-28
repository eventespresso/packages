import React from 'react';
import classNames from 'classnames';

import type { DescriptionListProps } from './types';
import DescriptionListItem from './DescriptionListItem';
import './styles.scss';

const DescriptionList: React.FC<DescriptionListProps> = ({ direction, dataSource }) => {
	const className = classNames('ee-description-list-grid', direction && `ee-description-list-grid--${direction}`);

	return (
		<dl className={className}>
			{dataSource.map((props, i) => (
				<DescriptionListItem key={i} {...props} />
			))}
		</dl>
	);
};

export default DescriptionList;
