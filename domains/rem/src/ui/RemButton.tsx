import React from 'react';
import { useDisclosure } from '@chakra-ui/hooks';
import { __ } from '@wordpress/i18n';

import { Button, NewEntityOption } from '@eventespresso/components';
import { Rem } from '@eventespresso/icons';

import Modal from './Modal';

const RemButton: React.FC = () => {
	const { isOpen, onOpen, ...disclosure } = useDisclosure();

	return (
		<>
			<NewEntityOption
				title={__('Recurring Dates')}
				icon={Rem}
				description={__('Add dates in bulk using a recurring pattern')}
			>
				<Button onClick={onOpen}>{__('Add Recurring Dates')}</Button>
				{isOpen && <Modal isOpen={true} {...disclosure} />}
			</NewEntityOption>
		</>
	);
};

export default RemButton;
