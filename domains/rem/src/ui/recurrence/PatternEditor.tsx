import React, { useCallback } from 'react';
import { useDisclosure } from '@chakra-ui/hooks';
import { __ } from '@wordpress/i18n';

import { Button } from '@eventespresso/components';

import ExclusionPattern from './ExclusionPattern';
import RecurrencePattern from './RecurrencePattern';

import { useFormState } from '../../data';

import './style.scss';

const PatternEditor: React.FC = () => {
	const { isOpen, onClose, onOpen } = useDisclosure({ defaultIsOpen: false });

	const { setExRule } = useFormState();

	const onExclusionClick = useCallback(() => {
		setExRule('');
		onClose();
	}, [onClose, setExRule]);

	return (
		<>
			<RecurrencePattern />
			{!isOpen && <Button buttonText={__('Enable exclusion')} onClick={onOpen} />}
			{isOpen && <Button buttonText={__('Disable exclusion')} onClick={onExclusionClick} />}
			{isOpen && <ExclusionPattern />}
		</>
	);
};

export default PatternEditor;
