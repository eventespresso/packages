import React from 'react';
import { __, sprintf } from '@wordpress/i18n';

import Start from './Start';
import Repeat from './Repeat';
import End from './End';
import '../styles/index.css';
import { RRuleGeneratorProps } from './types';
import { useRRuleState, useStateListener } from '../hooks';
import { withConfig, withState } from '../context';

const RRuleGenerator: React.FC<RRuleGeneratorProps> = (props) => {
	// set up state listener
	useStateListener(props);

	const { hideEnd, hideError, hideStart, id = 'rrule' } = props;
	const { error } = useRRuleState();

	return (
		<div>
			{!hideError && error && (
				<div className='alert alert-danger'>
					{sprintf(
						__('You provided an invalid RRule value to component. %s is not a correct RRule string.'),
						error.name
					)}
				</div>
			)}

			<div className='px-0 pt-3 border rounded'>
				{!hideStart && (
					<div>
						<Start id={`${id}-start`} />
						<hr />
					</div>
				)}

				<div>
					<Repeat id={`${id}-repeat`} />
				</div>

				{!hideEnd && (
					<div>
						<hr />
						<End id={`${id}-end`} />
					</div>
				)}
			</div>
		</div>
	);
};

export default withConfig(withState(RRuleGenerator));
