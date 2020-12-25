import React from 'react';
import classNames from 'classnames';

import { shortenGuid } from '@eventespresso/utils';
import { EntityId, EntityDbId } from '@eventespresso/data';
import { isDev } from '@eventespresso/constants';

import './style.scss';

export enum EntityIdAlignment {
	LEFT = 'left',
	RIGHT = 'right',
}

export interface EntityIDsProps {
	align?: EntityIdAlignment;
	dbid: EntityDbId;
	guid: EntityId;
}

export const EntityIDs: React.FC<EntityIDsProps> = ({ dbid, guid, align = 'left' }) => {
	const className = classNames('ee-entity-ids', 'ee-focus-priority-9', {
		'ee-align-lft': align === EntityIdAlignment.LEFT,
		'ee-align-rgt': align === EntityIdAlignment.RIGHT,
	});

	const extraID = isDev && (
		<>
			<span className={'ee-entity-id-separator'}>{':'}</span>
			<span className={'ee-entity-guid'}>{shortenGuid(guid)}</span>
		</>
	);

	return (
		<div className={className}>
			<span className={'ee-entity-dbid'}>{dbid}</span>
			{extraID}
		</div>
	);
};
