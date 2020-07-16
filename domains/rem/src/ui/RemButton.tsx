import React from 'react';
import { useDisclosure } from '@chakra-ui/hooks';
import { __ } from '@wordpress/i18n';

import { Button, ButtonSize } from '@eventespresso/components';
import { Rem } from '@eventespresso/icons';

import Modal from './Modal';
import { useRemInitialization } from '../hooks';

const RemButton: React.FC = () => {
	useRemInitialization();
	const { isOpen, onOpen, ...disclosure } = useDisclosure();

	return (
		<>
			<Button buttonSize={ButtonSize.BIG} icon={Rem} onClick={onOpen}>
				{__('Add Recurring Dates')}
			</Button>
			{isOpen && <Modal isOpen={true} {...disclosure} />}
		</>
	);
};

export default RemButton;
