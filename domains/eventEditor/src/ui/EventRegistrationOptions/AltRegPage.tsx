import React from 'react';

import { __ } from '@eventespresso/i18n';
import { GridItem, Heading, InlineEditText } from '@eventespresso/components';
import type { EventRegistrationOptionsProps } from './types';

interface Props extends Pick<EventRegistrationOptionsProps, 'altRegPage' | 'onAltRegPageChange'> {}

const AltRegPage: React.FC<Props> = ({ altRegPage, onAltRegPageChange }) => {
	const id = 'ee-event-registration-alt-reg-page';

	return (
		<GridItem
			className='ee-event-registration-options__alt-reg'
			id={id}
			label={__('Alternative Registration Page')}
			size='huge'
		>
			<Heading as='h4'>
				<InlineEditText
					aria-describedby={id}
					onChange={onAltRegPageChange}
					placeholder='https://'
					tag='h4'
					value={altRegPage}
				/>
			</Heading>
		</GridItem>
	);
};

export default AltRegPage;
