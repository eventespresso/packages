import React, { useCallback } from 'react';
import { __ } from '@wordpress/i18n';

import { RRuleEditor } from '../rRule';

import { useFormState } from '../../data';

import './style.scss';

const ExclusionPattern: React.FC = () => {
	const { exRule, setExRule } = useFormState();

	const onReset = useCallback(() => setExRule(''), [setExRule]);

	return (
		<RRuleEditor
			id={'ex-rule'}
			onChange={setExRule}
			onReset={onReset}
			rRuleString={exRule}
			resetLabel={__('Reset Exclusion Pattern')}
			type='exclusion'
		/>
	);
};

export default ExclusionPattern;
