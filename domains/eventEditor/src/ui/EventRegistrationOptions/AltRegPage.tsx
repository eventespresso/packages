import React, { useCallback } from 'react';

import { __ } from '@eventespresso/i18n';
import { Heading, InlineEditText } from '@eventespresso/components';
import { InlineEditProps } from '@eventespresso/adapters';
import { useEvent, useEventMutator } from '@eventespresso/edtr-services';

const AltRegPage: React.FC = () => {
	const event = useEvent();
	const { updateEntity: updateEvent } = useEventMutator(event?.id);
	const altRegPage = event?.altRegPage;

	const onChange = useCallback<InlineEditProps['onChange']>(
		(altRegPage) => {
			updateEvent({ altRegPage });
		},
		[updateEvent]
	);

	return (
		<div>
			<Heading as='h4'>{__('Alternative Registration Page')}</Heading>
			<InlineEditText placeholder='https://' onChange={onChange} tag='h4' value={altRegPage} />
		</div>
	);
};

export default AltRegPage;
