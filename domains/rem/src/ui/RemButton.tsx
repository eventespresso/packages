import React from 'react';
import { useDisclosure } from '@chakra-ui/hooks';

import { IconButton } from '@eventespresso/components';
import { Rem } from '@eventespresso/icons';

import Modal from './Modal';
import { useRemInitialization } from '../hooks';

const RemButton: React.FC = () => {
	useRemInitialization();
	const { isOpen, onOpen, ...disclosure } = useDisclosure();

	return (
		<>
			<IconButton borderless icon={Rem} onClick={onOpen} />
			{isOpen && <Modal isOpen={true} {...disclosure} />}
		</>
	);
};

export default RemButton;
