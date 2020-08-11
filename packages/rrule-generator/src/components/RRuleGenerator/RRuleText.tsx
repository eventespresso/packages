import React from 'react';
import { RRule } from 'rrule';
import format from 'date-fns/format';
import { __, sprintf } from '@wordpress/i18n';

export interface RRuleTextProps {
	rRuleString?: string;
}

const RRuleText: React.FC<RRuleTextProps> = ({ rRuleString }) => {
	const rRule = RRule.fromString(rRuleString);
	const ruleText = sprintf(__('%s,%sstarting %s'), rRule.toText(), '\n', format(rRule.options.dtstart, 'PPPP'));

	return (
		ruleText && (
			<div className='rrule-generator__form-group-row'>
				<div className='rrule-text'>{ruleText}</div>
			</div>
		)
	);
};

export default RRuleText;
