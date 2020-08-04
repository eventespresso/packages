import React, { useCallback } from 'react';
import { useDisclosure } from '@chakra-ui/hooks';
import { __ } from '@wordpress/i18n';

import { Button } from '@eventespresso/components';
import { Divider } from '@eventespresso/adapters';

import ExclusionPattern from './ExclusionPattern';
import RecurrencePattern from './RecurrencePattern';

import { useFormState } from '../../data';

import './style.scss';

const PatternEditor: React.FC = () => {
	const { isOpen, onClose, onOpen } = useDisclosure({ defaultIsOpen: false });

	const { rRule, setExRule } = useFormState();

	const onRemoveClick = useCallback(() => {
		setExRule('');
		onClose();
	}, [onClose, setExRule]);

	return (
		<>
			{!rRule ? (
				<div className='ee-form-error-message'>
					<p>{__('You must set a recurrence pattern')}</p>
				</div>
			) : null}
			<RecurrencePattern />
			<Button
				noHorizontalMargin
				buttonText={isOpen ? __('Remove exclusion pattern') : __('Add exclusion pattern')}
				onClick={isOpen ? onRemoveClick : onOpen}
			/>
			<Divider />
			{isOpen && <ExclusionPattern />}
		</>
	);
};

export default PatternEditor;
