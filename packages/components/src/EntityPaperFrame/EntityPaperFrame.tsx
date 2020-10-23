import React from 'react';
import classNames from 'classnames';

import type { Entity } from '@eventespresso/data';
import { EntityIDs } from '../EntityIDs';
import './style.css';

interface EntityPaperFrameProps {
	children: React.ReactNode;
	className?: string;
	entity: Entity;
}

/**
 * EntityPaperFrame
 * adds a styled frame that gives the appearance
 * of a piece of paper on a surface
 */
const EntityPaperFrame: React.FC<EntityPaperFrameProps> = ({ children, entity, ...props }) => {
	const className = classNames(props.className, 'ee-entity-paper-frame-wrapper');

	return (
		<div id={`ee-entity-paper-frame-${entity.id}`} className={className}>
			<EntityIDs dbid={entity.dbId} guid={entity.id} />

			<div className='ee-entity-paper-frame'>
				<div className='ee-entity-inner-wrapper'>{children}</div>
			</div>
		</div>
	);
};

export default EntityPaperFrame;
