import React, { useCallback } from 'react';
import { __ } from '@eventespresso/i18n';

import { DropdownMenu, DropdownToggleProps, Copy, Edit, Trash, useConfirmationDialog } from '@eventespresso/components';
import { EdtrGlobalModals } from '@eventespresso/edtr-services';
import { useGlobalModal } from '@eventespresso/registry';
import { useMemoStringify } from '@eventespresso/hooks';
import type { EntityEditModalData } from '@edtrUI/types';

import useActions from './useActions';
import type { DateMainMenuProps } from './types';

const DateMainMenu: React.FC<DateMainMenuProps> = ({ datetime }) => {
	const { copyDate, trashDate, trashed } = useActions({ datetimeId: datetime.id });
	const { openWithData } = useGlobalModal<EntityEditModalData>(EdtrGlobalModals.EDIT_DATE);

	const title = trashed ? __('Permanently delete Datetime?') : __('Move Datetime to Trash?');
	const message = trashed
		? __(
				'Are you sure you want to permanently delete this datetime? This action is permanent and can not be undone.'
		  )
		: __(
				'Are you sure you want to move this datetime to the trash? You can "untrash" this datetime later if you need to.'
		  );
	const { confirmationDialog, onOpen } = useConfirmationDialog({
		message,
		title,
		onConfirm: trashDate,
	});

	const toggleProps: DropdownToggleProps = useMemoStringify({
		tooltip: __('event date main menu'),
		tooltipProps: { placement: 'right' },
	});

	const trashDateTitle = trashed ? __('delete permanently') : __('trash datetime');

	const onOpenEditModal = useCallback(() => {
		openWithData({ entityId: datetime.id });
	}, [datetime.id, openWithData]);

	return (
		<>
			<DropdownMenu toggleProps={toggleProps}>
				<Edit onClick={onOpenEditModal} title={__('edit datetime')} />
				<Copy onClick={copyDate} title={__('copy datetime')} />
				<Trash onClick={onOpen} title={trashDateTitle} />
			</DropdownMenu>
			{confirmationDialog}
		</>
	);
};

export default DateMainMenu;
