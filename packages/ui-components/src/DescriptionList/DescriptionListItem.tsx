import React from 'react';
import classNames from 'classnames';
import type { DescriptionListItemProps } from './types';
import './styles.scss';

const DescriptionListItem: React.FC<DescriptionListItemProps> = ({ bgClassName, description, term, ...props }) => {
	const className = classNames(props.className, 'ee-description-list-item');
	const termClassName = classNames(
		bgClassName,
		bgClassName && 'ee-description-list-item__term--has-bg',
		'ee-description-list-item__term'
	);

	return (
		<div className={className}>
			<dt className={termClassName}>{term}</dt>
			<dd>{description}</dd>
		</div>
	);
};

export default DescriptionListItem;
