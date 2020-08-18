import React from 'react';
import { __ } from '@wordpress/i18n';
import { useDisclosure } from '@chakra-ui/hooks';

import { TabbableText } from '@eventespresso/components';
import { getPropsAreEqual } from '@eventespresso/services';

interface EditableDescProps {
	className?: string;
	description: string;
	updateEntity: ({ description }: { description: string }) => void;
}

const EditableDesc: React.FC<EditableDescProps> = ({ description, updateEntity }) => {
	const {
		// isOpen,
		onOpen,
		//   onClose
	} = useDisclosure();
	const className = 'entity-card-details__description';

	// This will be used in Popover in the followup PR
	// const onChangeDesc = useCallback(
	// 	(desc: string): void => {
	// 		if (desc !== description) {
	// 			updateEntity({ description });
	// 		}
	// 	},
	// 	[description, updateEntity]
	// );

	const tooltip = __('edit description...');

	const desc = description || tooltip;

	return <TabbableText richTextContent className={className} onClick={onOpen} tooltip={tooltip} text={desc} />;
};

export default React.memo(EditableDesc, getPropsAreEqual(['description']));
