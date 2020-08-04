import React from 'react';

import { RRuleEditorProps } from './types';
import PatternEditor from './PatternEditor';

import './style.scss';

const RRuleEditor: React.FC<RRuleEditorProps> = ({ id, onChange, rRuleString, sidebarLabel, type }) => {
	return (
		<div className='rrule-generator-wrapper'>
			{sidebarLabel && <h2 className='rrule-generator__sidebar-label'>{sidebarLabel}</h2>}
			<PatternEditor id={id} onChange={onChange} rRuleString={rRuleString} type={type} />
		</div>
	);
};

export default RRuleEditor;
