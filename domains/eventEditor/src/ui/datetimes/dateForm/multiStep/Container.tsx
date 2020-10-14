import React, { useCallback } from 'react';
import { __, sprintf } from '@eventespresso/i18n';

import { Container as EditModalContainer } from '@eventespresso/components';
import { useEvent, useDatetimeItem, EdtrGlobalModals } from '@eventespresso/edtr-services';
import { useGlobalModal } from '@eventespresso/registry';

import Content from './Content';
import { EntityEditModalData } from '@edtrUI/types';

const Container: React.FC = () => {
	const { getData, isOpen, close: closeModal, setData } = useGlobalModal<EntityEditModalData>(
		EdtrGlobalModals.EDIT_DATE
	);
	const { close: closePopover } = useGlobalModal(EdtrGlobalModals.NEW_DATE_POPOVER);
	const datetime = useDatetimeItem({ id: getData()?.entityId });
	const event = useEvent();

	let title = datetime?.dbId
		? sprintf(
				/* translators: %d datetime id */
				__('Edit datetime %d'),
				`#${datetime.dbId}`
		  )
		: __('New Datetime');

	// add event name to the title
	title = event?.name ? `${event.name}: ${title}` : title;

	const onClose = useCallback(() => {
		closeModal();
		closePopover();
		// reset the global modal data
		setData({ entityId: null });
	}, [closeModal, closePopover, setData]);

	return <EditModalContainer component={Content} entity={datetime} title={title} isOpen={isOpen} onClose={onClose} />;
};

export default Container;
