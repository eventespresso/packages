import { Dotdotdot } from '@eventespresso/adapters';
import type { SimpleEntityCardProps } from '../types';

import './styles.scss';

const SimpleEntityCard: React.FC<SimpleEntityCardProps> = ({ afterDetails, beforeDetails, name, sidebar }) => {
	return (
		<div className='ee-simple-entity-card'>
			{beforeDetails && beforeDetails}

			<div className='ee-simple-entity-card__details'>
				<div className='ee-simple-entity-card__name'>
					<Dotdotdot clamp={2}>{name}</Dotdotdot>
				</div>

				{afterDetails && afterDetails}
			</div>
			{sidebar && <div className='ee-simple-entity-card__sidebar'>{sidebar}</div>}
		</div>
	);
};

export default SimpleEntityCard;
