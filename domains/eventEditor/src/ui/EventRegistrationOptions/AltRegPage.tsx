import React from 'react';

import { __ } from '@eventespresso/i18n';
import { GridItem, InlineEditText } from '@eventespresso/components';
import type { RegistrationOptionsMetaBoxProps } from './types';

interface Props extends Pick<RegistrationOptionsMetaBoxProps, 'altRegPage' | 'onAltRegPageChange'> {}

const AltRegPage: React.FC<Props> = ({ altRegPage, onAltRegPageChange }) => {
	const id = 'ee-event-registration-alt-reg-page';

	return (
		<GridItem
			className='ee-event-registration-options__alt-reg'
			id={id}
			input={
				<InlineEditText
					aria-describedby={id}
					onChange={onAltRegPageChange}
					placeholder='https://'
					tag='h4'
					value={altRegPage}
				/>
			}
			label={__('Alternative Registration Page')}
			size='huge'
		/>
	);
};

export default AltRegPage;
