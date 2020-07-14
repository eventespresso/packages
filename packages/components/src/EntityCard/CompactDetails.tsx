import React from 'react';

import { Dotdotdot } from '@eventespresso/adapters';
import { CurrencyInput } from '../CurrencyInput';
import type { CompactDetailsProps } from './types';

const CompactDetails: React.FC<CompactDetailsProps> = ({ description, id, name, price }) => {
	return (
		<>
			{price && (
				<CurrencyInput
					id={id}
					// @ts-ignore
					amount={price}
					tag='h5'
					vertical
				/>
			)}

			<div>
				<div className='entity-card-details__name'>
					<Dotdotdot clamp={2}>{name}</Dotdotdot>
				</div>
				<div className='entity-card-details__description'>{description}</div>
			</div>
		</>
	);
};

export default React.memo(CompactDetails);
