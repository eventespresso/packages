import React from 'react';
import { __ } from '@wordpress/i18n';

import { RRuleEditor } from '../rRule';

import { useFormState } from '../../data';

import './style.scss';

const ExclusionPattern: React.FC = () => {
	const { exRule, setExRule } = useFormState();

	return (
		<RRuleEditor
			id={'ex-rule'}
			onChange={setExRule}
			rRuleString={exRule}
			sidebarLabel={__('Exclusion Pattern')}
			type='exclusion'
		/>
	);
};

export default ExclusionPattern;
