import React from 'react';
import classNames from 'classnames';

import { EntityPaperFrame } from '../EntityPaperFrame';
import type { EntityCardProps } from './types';
import { getPropsAreEqual } from '@eventespresso/services';
import './styles.scss';

const EntityCard: React.FC<EntityCardProps> = ({ actionsMenu, cacheId, details, entity, reverse = false, sidebar }) => {
	const className = classNames('entity-card', reverse && 'entity-card--reverse-layout');

	return (
		<EntityPaperFrame cacheId={cacheId} className='ee-entity-card-wrapper ee-fade-in' entity={entity}>
			<div className={className}>
				<div className={'entity-card__sidebar'}>{sidebar}</div>

				<div className={'entity-card__details-wrapper'}>
					<div className={'entity-card__details'}>{details}</div>
				</div>

				<div className={'entity-card__menu'}>{actionsMenu}</div>
			</div>
		</EntityPaperFrame>
	);
};

export default React.memo(EntityCard, getPropsAreEqual(['cacheId']));
