import React from 'react';
import { useDisclosure } from '@chakra-ui/hooks';

import { withEdtrContext } from '@eventespresso/edtr-services';
import { IconButton } from '@eventespresso/components';
import { Rem } from '@eventespresso/icons';

import Modal from './Modal';

const RemButton: React.FC = () => {
	const { isOpen, onOpen, ...disclosure } = useDisclosure();

	return (
		<>
			<IconButton borderless icon={Rem} onClick={onOpen} />
			<Modal isOpen={isOpen} {...disclosure} />
		</>
	);
};

export default withEdtrContext(RemButton);
