import React from 'react';
import { RRuleGenerator, RRuleConfig } from '@eventespresso/rrule-generator';

import { PatternEditorProps } from './types';

const config: RRuleConfig = {
	frequencies: ['YEARLY', 'MONTHLY', 'WEEKLY', 'DAILY'],
	endModes: ['AFTER', 'ON_DATE'],
	enableTimepicker: false,
};

const PatternEditor: React.FC<PatternEditorProps> = ({ id, type, rRuleString, onChange }) => {
	return <RRuleGenerator id={`rrule-${type}-${id}`} value={rRuleString} onChange={onChange} config={config} />;
};

export default PatternEditor;
