import React from 'react';
import { RRule } from 'rrule';
import format from 'date-fns/format';
import { __, sprintf } from '@eventespresso/i18n';

import { LOCALIZED_DATE_FULL_FORMAT } from '@eventespresso/constants';

export interface RRuleTextProps {
	rRuleString?: string;
}

const RRuleText: React.FC<RRuleTextProps> = ({ rRuleString }) => {
	const rRule = RRule.fromString(rRuleString);
	const ruleText = sprintf(
		/* translators: bla bla */
		__('%1$s,%2$sstarting %3$s'),
		rRule.toText(),
		'\n',
		format(rRule.options.dtstart, LOCALIZED_DATE_FULL_FORMAT)
	);

	return (
		ruleText && (
			<div className='rrule-generator__form-group-row'>
				<div className='rrule-text'>{ruleText}</div>
			</div>
		)
	);
};

export default RRuleText;
