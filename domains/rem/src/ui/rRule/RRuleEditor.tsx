import React from 'react';

import { RRuleEditorProps } from './types';
import PatternEditor from './PatternEditor';

import './style.scss';

const RRuleEditor: React.FC<RRuleEditorProps> = ({ id, onChange, rRuleString, type }) => {
	return (
		<div className='rrule-generator-wrapper'>
			<div className={`${type}-form rem-form-row`}>
				<PatternEditor id={id} onChange={onChange} rRuleString={rRuleString} type={type} />
			</div>
		</div>
	);
};

export default RRuleEditor;
