import React, { useCallback } from 'react';

import { __ } from '@eventespresso/i18n';
import { GridItem, InlineEditText } from '@eventespresso/components';
import { useEvent, useEventMutator } from '@eventespresso/edtr-services';
import type { InlineEditProps } from '@eventespresso/adapters';

const AltRegPage: React.FC = () => {
	const event = useEvent();
	const { updateEntity: updateEvent } = useEventMutator(event?.id);
	const altRegPage = event?.altRegPage;

	const id = 'ee-event-registration-alt-reg-page';

	const onChange = useCallback<InlineEditProps['onChange']>(
		(newAltRegPage) => {
			if (newAltRegPage !== altRegPage) {
				updateEvent({ altRegPage: newAltRegPage });
			}
		},
		[altRegPage, updateEvent]
	);

	return (
		<GridItem
			className='ee-event-registration-options__alt-reg'
			id={id}
			input={
				<InlineEditText
					aria-describedby={id}
					onChange={onChange}
					placeholder='https://'
					tag='h4'
					value={altRegPage}
				/>
			}
			label={__('Alternative Registration Page')}
		/>
	);
};

export default AltRegPage;
