import React from 'react';
import { RRuleGenerator, RRuleConfig } from '@eventespresso/rrule-generator';

import { PatternEditorProps } from './types';

const config: RRuleConfig = {
	frequencies: ['YEARLY', 'MONTHLY', 'WEEKLY', 'DAILY'],
	endModes: ['AFTER', 'ON_DATE'],
	enableTimepicker: false,
};

const PatternEditor: React.FC<PatternEditorProps> = ({ id, rRuleString, onChange, type }) => {
	return <RRuleGenerator config={config} id={`rrule-${type}-${id}`} onChange={onChange} value={rRuleString} />;
};

export default PatternEditor;
