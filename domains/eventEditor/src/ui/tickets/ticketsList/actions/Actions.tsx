import { __ } from '@eventespresso/i18n';
import { useGlobalModal } from '@eventespresso/registry';
import { DropdownMenu, DropdownMenuItem } from '@eventespresso/ui-components';
import { EdtrGlobalModals } from '@eventespresso/edtr-services';

import './styles.scss';

export const Actions = () => {
	const { open } = useGlobalModal(EdtrGlobalModals.DEFAULT_TICKETS);

	return (
		<DropdownMenu wrapperClassName='ee-tickets-list-actions'>
			<DropdownMenuItem onClick={open} title={__('Default tickets')} />
			{/* King's throne for other future items */}
		</DropdownMenu>
	);
};
