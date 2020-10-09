import React from 'react';
import classNames from 'classnames';
import { shortenGuid } from '@eventespresso/utils';
import { EntityId, EntityDbId } from '@eventespresso/data';
import { useConfig } from '@eventespresso/services';

import './style.scss';

export enum EntityIdAlignment {
	LEFT = 'left',
	RIGHT = 'right',
}

export interface EntityIdProps {
	align?: EntityIdAlignment;
	dbid: EntityDbId;
	guid: EntityId;
}

const EntityIDs: React.FC<EntityIdProps> = ({ dbid, guid, align = 'left' }) => {
	const { wp_debug } = useConfig();

	const className = classNames('ee-entity-ids', 'ee-focus-priority-9', {
		'ee-align-lft': align === EntityIdAlignment.LEFT,
		'ee-align-rgt': align === EntityIdAlignment.RIGHT,
	});

	const extraID = wp_debug && (
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

export default EntityIDs;
