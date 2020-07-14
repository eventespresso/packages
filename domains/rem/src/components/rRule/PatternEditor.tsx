import React from 'react';
import RRuleGenerator from 'react-rrule-generator';

import { PatternEditorProps } from './types';

const config = {
	repeat: ['Yearly', 'Monthly', 'Weekly', 'Daily'],
	end: ['After', 'On date'],
	weekStartsOnSunday: true,
	enableTimepicker: false,
	hideStart: false,
};

const PatternEditor: React.FC<PatternEditorProps> = ({ id, type, rRuleString, onChange }) => {
	return <RRuleGenerator id={`rrule-${type}-${id}`} value={rRuleString} onChange={onChange} config={config} />;
};

export default PatternEditor;
