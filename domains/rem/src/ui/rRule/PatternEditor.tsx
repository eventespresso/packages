import { useMemo } from 'react';

import { RRuleGenerator, RRuleConfig } from '@eventespresso/rrule-generator';

import useRRuleLimits from './useRRuleLimits';
import type { PatternEditorProps } from './types';

const defaultConfig: RRuleConfig = {
	frequencies: ['YEARLY', 'MONTHLY', 'WEEKLY', 'DAILY'],
	endModes: ['AFTER', 'ON_DATE'],
	enableTimepicker: false,
};

const PatternEditor: React.FC<PatternEditorProps> = ({ id, rRuleString, onChange, type }) => {
	const limitsConfig = useRRuleLimits(type);

	const config = useMemo(() => ({ ...defaultConfig, ...limitsConfig }), [limitsConfig]);

	return <RRuleGenerator config={config} id={id} onChange={onChange} value={rRuleString} />;
};

export default PatternEditor;
