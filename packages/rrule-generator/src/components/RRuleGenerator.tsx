import React, { useEffect } from 'react';
import { __, sprintf } from '@wordpress/i18n';

import Start from './Start';
// import Repeat from './Repeat/index';
import End from './End';
import computeRRuleFromString from '../utils/computeRRule/fromString/computeRRule';
import computeRRuleToString from '../utils/computeRRule/toString/computeRRule';
import '../styles/index.css';
import { RRuleGeneratorProps } from './types';
import { useRRuleState } from '../hooks';
import { withConfig, withState } from '../context';

const RRuleGenerator: React.FC<RRuleGeneratorProps> = ({
	hideEnd,
	hideError,
	hideStart,
	id = 'rrule',
	onChange,
	value,
}) => {
	const { /* repeat,  */ error, getData, setData } = useRRuleState();

	// Update/Initiate the state from value if it changes
	useEffect(() => {
		if (value) {
			const data = computeRRuleFromString(getData(), value);
			setData(data);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [value]);

	const rRuleString = computeRRuleToString({ ...getData(), options: {} });
	// TODO: move this to some state listener
	useEffect(() => {
		onChange(rRuleString);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [rRuleString]);

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

				{/* <div>
					<Repeat
						id={`${id}-repeat`}
						repeat={repeat}
						handleChange={this.handleChange}
						translations={this.props.translations}
					/>
				</div> */}

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
