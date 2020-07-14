import React from 'react';
import classNames from 'classnames';

import { EntityPaperFrame } from '../EntityPaperFrame';
import Details from './Details';
import type { EntityCardProps } from './types';
import { getPropsAreEqual } from '@eventespresso/services';
import './styles.scss';

const EntityCard: React.FC<EntityCardProps> = ({
	actionsMenu,
	cacheId,
	compact,
	details,
	entity,
	reverse = false,
	sidebar,
}) => {
	const className = classNames(
		'entity-card',
		reverse && !compact && 'entity-card--reverse-layout',
		compact && 'entity-card--compact'
	);

	return (
		<EntityPaperFrame
			cacheId={cacheId}
			className='ee-entity-card-wrapper ee-fade-in'
			compact={compact}
			entity={entity}
		>
			<div className={className}>
				{!compact && <div className={'entity-card__sidebar'}>{sidebar}</div>}

				<div className={'entity-card__details-wrapper'}>
					<div className={'entity-card__details'}>
						{details && details}
						{!details && compact && <Details entity={entity} />}
					</div>
				</div>

				{actionsMenu && <div className={'entity-card__menu'}>{actionsMenu}</div>}
			</div>
		</EntityPaperFrame>
	);
};

export default React.memo(EntityCard, getPropsAreEqual(['cacheId']));
