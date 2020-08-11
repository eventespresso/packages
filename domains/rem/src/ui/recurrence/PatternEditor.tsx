import React, { useCallback } from 'react';
import { useDisclosure } from '@chakra-ui/hooks';
import { __ } from '@wordpress/i18n';

import { Button, ButtonRow, DebugInfo } from '@eventespresso/components';
import { Divider } from '@eventespresso/adapters';
import { CloseOutlined, Rem } from '@eventespresso/icons';

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

	return (
		<>
			{!rRule ? (
				<div className='ee-form-error-message'>
					<p>{__('You must set a recurrence pattern')}</p>
				</div>
			) : null}
			<RRuleEditor
				desc={__('defines a rule or repeating pattern for generating event dates that occur regularly')}
				icon={Rem}
				id={'r-rule'}
				onChange={setRRule}
				rRuleString={rRule}
				sidebarLabel={__('Recurrence Pattern')}
				type='recurrence'
			/>
			<Divider type='dotted' />
			{isOpen && (
				<RRuleEditor
					desc={__('defines a rule or repeating pattern that will remove dates from those generated above')}
					icon={CloseOutlined}
					id={'ex-rule'}
					onChange={setExRule}
					rRuleString={exRule}
					sidebarLabel={__('Exclusion Pattern')}
					type='exclusion'
				/>
			)}
			<ButtonRow>
				<Button
					buttonText={isOpen ? __('Remove exclusion pattern') : __('Add exclusion pattern')}
					onClick={isOpen ? onRemoveClick : onOpen}
				/>
				<DebugInfo data={{ rRule, exRule }} />
			</ButtonRow>
		</>
	);
};

export default PatternEditor;
