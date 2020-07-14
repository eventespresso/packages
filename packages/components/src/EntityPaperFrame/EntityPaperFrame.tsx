import React from 'react';
import classNames from 'classnames';

import { EntityIDs } from '../EntityIDs';
import { getPropsAreEqual } from '@eventespresso/services';
import { Entity } from '@eventespresso/data';
import './style.css';

interface EntityPaperFrameProps {
	cacheId?: string;
	children: React.ReactNode;
	className?: string;
	compact?: boolean;
	entity: Entity;
}

/**
 * EntityPaperFrame
 * adds a styled frame that gives the appearance
 * of a piece of paper on a surface
 */
const EntityPaperFrame: React.FC<EntityPaperFrameProps> = ({ children, compact, entity, ...props }) => {
	const className = classNames(props.className, 'ee-entity-paper-frame-wrapper');

	return (
		<div id={`ee-entity-paper-frame-${entity.id}`} className={className}>
			{!compact && <EntityIDs dbid={entity.dbId} guid={entity.id} />}

			<div className='ee-entity-paper-frame'>
				<div className='ee-entity-inner-wrapper'>{children}</div>
			</div>
		</div>
	);
};

export default React.memo(EntityPaperFrame, getPropsAreEqual(['cacheId']));
