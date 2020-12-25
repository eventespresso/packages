import classNames from 'classnames';

import './style.scss';

import { EntityActionsMenuProps, EntityActionsMenuLayout } from './types';

export const EntityActionsMenu: React.FC<EntityActionsMenuProps> = ({
	layout = EntityActionsMenuLayout.Horizontal,
	menuItems,
	...props
}) => {
	const className = classNames(
		'ee-entity-actions-menu',
		{
			'ee-entity-actions-menu--horizontal': layout === EntityActionsMenuLayout.Horizontal,
			'ee-entity-actions-menu--vertical': layout === EntityActionsMenuLayout.Vertical,
		},
		props.className
	);

	return (
		<div className={className} {...props}>
			{menuItems}
		</div>
	);
};
