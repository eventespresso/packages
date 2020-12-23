import React from 'react';
import classNames from 'classnames';

import { FormSectionSidebar } from '@eventespresso/form';
import { Container } from '../../../../../packages/components';

import PatternEditor from './PatternEditor';
import type { RRuleEditorProps } from './types';

import './style.scss';

const RRuleEditor: React.FC<RRuleEditorProps> = ({ desc, icon, id, onChange, rRuleString, sidebarLabel, type }) => {
	// const wrapperClassName = classNames('rrule-generator-wrapper', type && `rrule-generator-wrapper-${type}`);

	return (
		<Container content={<PatternEditor id={id} onChange={onChange} rRuleString={rRuleString} type={type} />}>
			{sidebarLabel && <FormSectionSidebar desc={desc} Icon={icon} title={sidebarLabel} />}
		</Container>
	);
};

export default RRuleEditor;
