import React, { useCallback } from 'react';

import { __ } from '@eventespresso/i18n';
import { Heading, InlineEditText } from '@eventespresso/components';
import { useEvent } from '@eventespresso/edtr-services';

const AltRegPage: React.FC = () => {
	const event = useEvent();
	const altRegPage = event?.altRegPage;

	const onChange = useCallback(() => {
		console.log({ event });
	}, [event]);

	if (!altRegPage) return null;

	const text = __('Alternative Registration Page');

	return (
		<div>
			<Heading as='h4'>{text}</Heading>
			<InlineEditText onChangeValue={onChange} tag='h4' tooltip={text} value={altRegPage} />
		</div>
	);
};

export default AltRegPage;
