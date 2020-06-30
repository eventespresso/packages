import React from 'react';
import { useDisclosure } from '@chakra-ui/hooks';

import { withEdtrContext } from '@eventespresso/edtr-services';
import { IconButton } from '@eventespresso/components';
import { Rem } from '@eventespresso/icons';

import Modal from '../components/Modal';

const RemButton = ({ datetime }) => {
	const { isOpen, onOpen, ...disclosure } = useDisclosure();

	return (
		<>
			<IconButton borderless icon={Rem} onClick={onOpen} />
			<Modal datetime={datetime} isOpen={isOpen} {...disclosure} />
		</>
	);
};

export default withEdtrContext(RemButton);
