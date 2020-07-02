import React from 'react';
import RRule from 'rrule';
import RRuleGenerator from 'react-rrule-generator';
import { __ } from '@wordpress/i18n';

import { PATTERN_TYPE_RECURRENCE } from '../../constants';

interface PatternEditorProps {
	id: string;
	onChange: VoidFunction;
	rruleString: string;
	type: string;
}

const PatternEditor: React.FC<PatternEditorProps> = ({ id, type, rruleString, onChange }) => {
	return (
		<RRuleGenerator
			id={`rrule-${type}-${id}`}
			value={rruleString}
			onChange={onChange}
			config={{
				repeat: ['Yearly', 'Monthly', 'Weekly', 'Daily'],
				end: ['After', 'On date'],
				weekStartsOnSunday: true,
				enableTimepicker: false,
				hideStart: false,
			}}
		/>
	);
};

interface PatternEditorControlsProps {
	label: string;
	onChange: VoidFunction;
}

const PatternEditorControls: React.FC<PatternEditorControlsProps> = ({ label, onChange }) => {
	return (
		<button id={'rem-cancel-button'} className={'button button-secondary'} value={null} onClick={onChange}>
			{__('Reset ' + label, 'event_espresso')}
		</button>
	);
};

interface RRulePatternEditorProps {
	id: string;
	initialOpen: boolean;
	onChange: VoidFunction;
	rruleString: string;
	type: string;
}

const RRulePatternEditor: React.FC<RRulePatternEditorProps> = ({
	id,
	type,
	rruleString,
	onChange,
	initialOpen = false,
}) => {
	const label =
		type === PATTERN_TYPE_RECURRENCE
			? __('Recurrence Pattern', 'event_espresso')
			: __('Exclusion Pattern', 'event_espresso');
	const rrule = rruleString ? RRule.fromString(rruleString) : new RRule();
	const rruleText =
		rruleString && rrule instanceof RRule && rrule.isFullyConvertibleToText() ? rrule.toText() : 'none';

	return (
		<>
			<div className={`${type}-form rem-form-row`}>
				<PatternEditor id={id} onChange={onChange} rruleString={rruleString} type={type} />
			</div>
			<div className={`${type}-form-controls rrule-generator-form-controls rem-form-row`}>
				<PatternEditorControls label={label} onChange={onChange} />
				<div className='clear'></div>
			</div>
		</>
	);
};

export default RRulePatternEditor;
