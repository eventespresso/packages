import React from 'react';

import { DebugInfo } from '@eventespresso/components';
import { RRuleEditorProps } from './types';
import PatternEditor from './PatternEditor';

import './style.scss';

const RRuleEditor: React.FC<RRuleEditorProps> = ({ id, onChange, rRuleString, sidebarLabel, type }) => {
	return (
		<>
			<div className='rrule-generator-wrapper'>
				{sidebarLabel && <h2 className='rrule-generator__sidebar-label'>{sidebarLabel}</h2>}
				<PatternEditor id={id} onChange={onChange} rRuleString={rRuleString} type={type} />
			</div>
			<DebugInfo data={rRuleString} asJson={false} />
		</>
	);
};

export default RRuleEditor;
