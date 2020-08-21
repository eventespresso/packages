import React, { useCallback } from 'react';
import { useDisclosure } from '@chakra-ui/hooks';
import { __ } from '@wordpress/i18n';

import { Button, ButtonRow, DebugInfo } from '@eventespresso/components';
import { Divider } from '@eventespresso/adapters';
import { CloseCircleOutlined, Repeat } from '@eventespresso/icons';

import { RRuleEditor } from '../rRule';
import { useFormState } from '../../data';

import './style.scss';

const PatternEditor: React.FC = () => {
	const { isOpen, onClose, onOpen } = useDisclosure({ defaultIsOpen: false });
	const { exRule, rRule, setExRule, setRRule } = useFormState();

	const onRemoveClick = useCallback(() => {
		setExRule('');
		onClose();
	}, [onClose, setExRule]);

	// We need to show rRule even after coming back from next steps
	// isOpen is reset on each mount (step), exRule still remains in REM state
	const showExRule = exRule || isOpen;

	return (
		<>
			{!rRule ? (
				<div className='ee-form-error-message'>
					<p>{__('You must set a recurrence pattern')}</p>
				</div>
			) : null}
			<RRuleEditor
				desc={__('defines a rule or repeating pattern for generating event dates that occur regularly')}
				icon={Repeat}
				id={'r-rule'}
				onChange={setRRule}
				rRuleString={rRule}
				sidebarLabel={__('Recurrence Pattern')}
				type='recurrence'
			/>
			<Divider type='dotted' />
			<ButtonRow align='left'>
				<Button
					buttonText={showExRule ? __('Remove exclusion pattern') : __('Add exclusion pattern')}
					noHorizontalMargin
					onClick={showExRule ? onRemoveClick : onOpen}
				/>
			</ButtonRow>
			{showExRule && (
				<RRuleEditor
					desc={__('defines a rule or repeating pattern that will remove dates from those generated above')}
					icon={CloseCircleOutlined}
					id={'ex-rule'}
					onChange={setExRule}
					rRuleString={exRule}
					sidebarLabel={__('Exclusion Pattern')}
					type='exclusion'
				/>
			)}
			<ButtonRow>
				<DebugInfo data={{ rRule, exRule }} />
			</ButtonRow>
		</>
	);
};

export default PatternEditor;
