import React from 'react';
import RRuleGenerator from 'react-rrule-generator';
import { __ } from '@wordpress/i18n';

import { PatternEditorProps } from './types';

const config = {
	repeat: [__('Yearly'), __('Monthly'), __('Weekly'), __('Daily')],
	end: [__('After'), __('On date')],
	weekStartsOnSunday: true,
	enableTimepicker: false,
	hideStart: false,
};

const PatternEditor: React.FC<PatternEditorProps> = ({ id, type, rRuleString, onChange }) => {
	return <RRuleGenerator id={`rrule-${type}-${id}`} value={rRuleString} onChange={onChange} config={config} />;
};

export default PatternEditor;
