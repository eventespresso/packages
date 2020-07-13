import React, { useCallback } from 'react';
import { __ } from '@wordpress/i18n';

import { RRuleEditor } from '../rRule';

import { useDatetime } from '../../context';
import { useFormState } from '../../services/data';

import './style.scss';

const ExclusionPattern: React.FC = () => {
	const datetime = useDatetime();
	const { exRule, setExRule } = useFormState();

	const onReset = useCallback(() => setExRule(''), [setExRule]);

	return (
		<RRuleEditor
			id={datetime.id}
			onChange={setExRule}
			onReset={onReset}
			rRuleString={exRule}
			resetLabel={__('Reset Exclusion Pattern')}
			type='exclusion'
		/>
	);
};

export default ExclusionPattern;
