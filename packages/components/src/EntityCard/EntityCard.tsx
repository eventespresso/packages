import React from 'react';
import classNames from 'classnames';

import { Content, Row, Sidebar } from '../Container';
import { EntityPaperFrame } from '../EntityPaperFrame';
import { getPropsAreEqual } from '@eventespresso/utils';
import type { EntityCardProps } from './types';
import './styles.scss';

const EntityCard: React.FC<EntityCardProps> = ({
	actionsMenu,
	cacheId,
	details,
	entity,
	reverse = false,
	sidebar,
	sidebarClass,
}) => {
	const sidebarClassName = classNames(sidebarClass, 'entity-card__sidebar');
	const beforeSidebar = (
		<Sidebar align={'wide'} before className={sidebarClassName}>
			{sidebar}
		</Sidebar>
	);
	const afterSidebar = <Sidebar className={'entity-card__menu'}>{actionsMenu}</Sidebar>;

	return (
		<EntityPaperFrame cacheId={cacheId} className={'ee-entity-card-wrapper ee-fade-in'} entity={entity}>
			<Row align={'wide'} className={'entity-card'}>
				{!reverse ? beforeSidebar : afterSidebar}
				<Content className={'entity-card__details-wrapper'}>
					<Content align={'wide'} className={'entity-card__details'}>
						{details}
					</Content>
				</Content>
				{!reverse ? afterSidebar : beforeSidebar}
			</Row>
		</EntityPaperFrame>
	);
};

export default React.memo(EntityCard, getPropsAreEqual(['cacheId']));
