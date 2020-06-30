import React from 'react';
import RRule from 'rrule';
import RRuleGenerator from 'react-rrule-generator';
import { __ } from '@wordpress/i18n';
import { PanelBody, PanelRow } from '@wordpress/components';

import { PATTERN_TYPE_RECURRENCE } from '../../constants';

const getPatternEditor = (id, type, rruleString, onChange) => {
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

const getPatternEditorControls = (label, onChange) => {
	return (
		<button id={'rem-cancel-button'} className={'button button-secondary'} value={null} onClick={onChange}>
			{__('Reset ' + label, 'event_espresso')}
		</button>
	);
};

const RRulePatternEditor = ({ id, type, rruleString, onChange, initialOpen = false }) => {
	const label =
		type === PATTERN_TYPE_RECURRENCE
			? __('Recurrence Pattern', 'event_espresso')
			: __('Exclusion Pattern', 'event_espresso');
	const rrule = rruleString ? RRule.fromString(rruleString) : new RRule();
	const rruleText =
		rruleString && rrule instanceof RRule && rrule.isFullyConvertibleToText() ? rrule.toText() : 'none';

	return (
		<PanelBody
			title={label + ' : ' + rruleText}
			className={`${type}-rrule-generator-wrapper rrule-generator-wrapper`}
			initialOpen={initialOpen || rruleText !== 'none'}
		>
			<PanelRow className={`${type}-form rem-form-row`}>
				{getPatternEditor(id, type, rruleString, onChange)}
			</PanelRow>
			<PanelRow className={`${type}-form-controls rrule-generator-form-controls rem-form-row`}>
				{getPatternEditorControls(label, onChange)}
				<div className='clear'></div>
			</PanelRow>
		</PanelBody>
	);
};

export default RRulePatternEditor;
