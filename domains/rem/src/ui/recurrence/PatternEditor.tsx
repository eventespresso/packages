import React, { useCallback, useMemo } from 'react';
import { useDisclosure } from '@chakra-ui/core';
import { __ } from '@eventespresso/i18n';

import { Button, ButtonRow, DebugInfo, Divider, ErrorMessage } from '@eventespresso/components';
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

	const debugData = useMemo(() => ({ rRule, exRule }), [exRule, rRule]);

	return (
		<>
			<ErrorMessage message={!rRule && __('You must set a recurrence pattern')} />
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
			<DebugInfo data={debugData} />
		</>
	);
};

export default PatternEditor;
