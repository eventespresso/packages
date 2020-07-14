import React from 'react';

import { Dotdotdot } from '@eventespresso/adapters';
import type { SimpleEntityCardProps } from '../types';

import './styles.scss';

const SimpleEntityCard: React.FC<SimpleEntityCardProps> = ({ afterDetails, beforeDetails, id, name }) => {
	return (
		<div className='ee-simple-entity-card'>
			{beforeDetails && beforeDetails}

			<div className='ee-simple-entity-card__details'>
				<div className='ee-simple-entity-card__name'>
					<Dotdotdot clamp={3}>{name}</Dotdotdot>
				</div>
			</div>

			{afterDetails && afterDetails}
		</div>
	);
};

export default React.memo(SimpleEntityCard);
