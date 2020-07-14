import React from 'react';

import { Dotdotdot } from '@eventespresso/adapters';
import { CurrencyInput } from '../CurrencyInput';
import type { DetailsProps } from './types';

const Details: React.FC<DetailsProps> = ({ entity }) => {
	return (
		<>
			<CurrencyInput
				id={entity.id}
				// @ts-ignore
				amount={entity.price}
				tag='h5'
				vertical
			/>
			<div>
				<div className='entity-card-details__name'>
					<Dotdotdot clamp={2}>
						{
							// @ts-ignore
							entity.name
						}
					</Dotdotdot>
				</div>
				<div className='entity-card-details__description'>
					{
						// @ts-ignore
						entity.description
					}
				</div>
			</div>
		</>
	);
};

export default React.memo(Details);
