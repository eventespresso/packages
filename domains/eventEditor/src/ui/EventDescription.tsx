import React from 'react';

import { __ } from '@eventespresso/i18n';
import { AdvancedTextEditor } from '@eventespresso/rich-text-editor';
import { Heading } from '@eventespresso/components';
import { useEvent } from '@eventespresso/edtr-services';
import { withFeature } from '@eventespresso/services';
import { TestForm } from '@eventespresso/form';

const EventDescription: React.FC = () => {
	const event = useEvent();

	return (
		<div className='ee-event-description ee-edtr-section'>
			<TestForm />
			<Heading as='h3'>{__('Event Description')}</Heading>
			<AdvancedTextEditor onChange={console.log} defaultValue={event?.description} />
		</div>
	);
};

export default withFeature('use_event_description_rte')(EventDescription);
