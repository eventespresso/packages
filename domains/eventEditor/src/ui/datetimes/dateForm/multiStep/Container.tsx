import { useCallback } from 'react';

import { __, sprintf } from '@eventespresso/i18n';

import { EntityEditModalContainer } from '@eventespresso/ee-components';
import { useEvent, useDatetimeItem, EdtrGlobalModals } from '@eventespresso/edtr-services';
import { useGlobalModal } from '@eventespresso/registry';

import Content from './Content';
import { EntityEditModalData } from '@edtrUI/types';

const Container: React.FC = () => {
	const { getData, isOpen, close: closeEditDateModal, setData } = useGlobalModal<EntityEditModalData>(
		EdtrGlobalModals.EDIT_DATE
	);
	const { close: closeNewDateModal } = useGlobalModal(EdtrGlobalModals.NEW_DATE);
	const datetime = useDatetimeItem({ id: getData()?.entityId });
	const event = useEvent();

	let title = datetime?.dbId
		? sprintf(
				/* translators: %s datetime id */
				__('Edit datetime %s'),
				`#${datetime.dbId}`
		  )
		: __('New Datetime');

	// add event name to the title
	title = event?.name ? `${event.name}: ${title}` : title;

	const onClose = useCallback(() => {
		closeEditDateModal();
		closeNewDateModal();
		// reset the global modal data
		setData({ entityId: null });
	}, [closeEditDateModal, closeNewDateModal, setData]);

	return (
		<EntityEditModalContainer
			component={Content}
			entity={datetime}
			title={title}
			isOpen={isOpen}
			onClose={onClose}
		/>
	);
};

export default Container;
