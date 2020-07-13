import React from 'react';

import { RRuleEditorProps } from './types';
import PatternEditor from './PatternEditor';
import EditorControls from './EditorControls';

import './style.scss';
/**
 * R Rule Pattern Editor
 */
const RRuleEditor: React.FC<RRuleEditorProps> = ({ id, onChange, onReset, resetLabel, rRuleString, type }) => {
	return (
		<div className='rrule-generator-wrapper'>
			<div className={`${type}-form rem-form-row`}>
				<PatternEditor id={id} onChange={onChange} rRuleString={rRuleString} type={type} />
			</div>
			<div className={`${type}-form-controls rrule-generator-form-controls rem-form-row`}>
				<EditorControls resetLabel={resetLabel} onReset={onReset} />
				<div className='clear'></div>
			</div>
		</div>
	);
};

export default RRuleEditor;
