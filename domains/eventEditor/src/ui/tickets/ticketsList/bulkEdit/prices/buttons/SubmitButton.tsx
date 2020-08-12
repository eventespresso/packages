import React, { useCallback } from 'react';
import { __ } from '@wordpress/i18n';
import type { UseDisclosureReturn } from '@chakra-ui/hooks';

import { Button, ButtonType } from '@eventespresso/components';

const SubmitButton: React.FC<Partial<UseDisclosureReturn>> = ({ onClose }) => {
	const onClick = useCallback(() => {
		onClose();
	}, [onClose]);

	return <Button buttonText={__('Submit')} buttonType={ButtonType.PRIMARY} type='submit' onClick={onClick} />;
};

export default SubmitButton;
