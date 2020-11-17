import React from 'react';

import { AdvancedTextEditor } from '@eventespresso/rich-text-editor';
import { useEvent } from '@eventespresso/edtr-services';

const EventDescription: React.FC = () => {
	const event = useEvent();

	return <AdvancedTextEditor onChange={console.log} defaultValue={event.description} />;
};

export default EventDescription;
