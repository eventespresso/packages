import { __ } from '@eventespresso/i18n';
import { useGlobalModal } from '@eventespresso/registry';
import { DropdownMenu, DropdownMenuItem, DropdownMenuProps } from '@eventespresso/ui-components';
import { EdtrGlobalModals } from '@eventespresso/edtr-services';

const toggleProps: DropdownMenuProps['toggleProps'] = {
	noPadding: true,
	size: 'big',
};

export const Actions = () => {
	const { open } = useGlobalModal(EdtrGlobalModals.DEFAULT_TICKETS);

	return (
		<DropdownMenu toggleProps={toggleProps}>
			<DropdownMenuItem onClick={open} title={__('Default tickets')} />
			{/* King's throne for other future items */}
		</DropdownMenu>
	);
};
