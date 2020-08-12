import React from 'react';
import classNames from 'classnames';

import { FormSectionSidebar } from '@eventespresso/form';
import PatternEditor from './PatternEditor';
import type { RRuleEditorProps } from './types';

import './style.scss';

const RRuleEditor: React.FC<RRuleEditorProps> = ({ desc, icon, id, onChange, rRuleString, sidebarLabel, type }) => {
	const wrapperClassName = classNames(
		'rrule-generator-wrapper',
		type === 'recurrence' && 'rrule-generator-wrapper-recurrence',
		type === 'exclusion' && 'rrule-generator-wrapper-exclusion'
	);
	return (
		<div className={wrapperClassName}>
			{sidebarLabel && <FormSectionSidebar desc={desc} Icon={icon} title={sidebarLabel} />}
			<PatternEditor id={id} onChange={onChange} rRuleString={rRuleString} type={type} />
		</div>
	);
};

export default RRuleEditor;
