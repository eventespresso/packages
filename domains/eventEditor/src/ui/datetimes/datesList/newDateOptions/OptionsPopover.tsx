import React from 'react';
import { __ } from '@wordpress/i18n';
import { useDisclosure } from '@chakra-ui/hooks';

import { Button, ButtonSize, NewEntityPopover } from '@eventespresso/components';
import { Calendar } from '@eventespresso/icons';

const OptionsPopover: React.FC = ({ children }) => {
	const { isOpen, onClose, onOpen: openModal } = useDisclosure({ defaultIsOpen: false });
	return (
		<>
			<Button
				buttonSize={ButtonSize.BIG}
				buttonText={__('Add New Date')}
				icon={Calendar}
				mr={2}
				onClick={openModal}
			/>
			{isOpen && (
				<NewEntityPopover isOpen={true} onClose={onClose} title={__('Add New Date')}>
					{children}
				</NewEntityPopover>
			)}
		</>
	);
};

export default OptionsPopover;
