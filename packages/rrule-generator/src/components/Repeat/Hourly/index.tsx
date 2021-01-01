import { __ } from '@eventespresso/i18n';
import { Divider, NumberInput } from '@eventespresso/ui-components';

import { useRRuleState } from '../../../hooks';
import { useIntervalUpdater } from '../../../utils';
import type { BaseProps } from '../../types';

const Hourly: React.FC<BaseProps> = ({ id }) => {
	const {
		repeat: { hourly },
		setRepeatInterval,
	} = useRRuleState();

	const onChangeInterval = useIntervalUpdater('hourly', setRepeatInterval);

	return (
		<div className='rrule-generator__form-group-row rrule-generator__form-group-row--align-items-start rrule-generator__form-group-row--no-label'>
			<label className='rrule-generator__labelled-input'>
				<span>{__('every')}</span>
				<Divider orientation='vertical' size='tiny' />
				<NumberInput
					aria-label={__('Repeat hourly interval')}
					id={`${id}-interval`}
					name={`${id}-interval`}
					onChange={onChangeInterval}
					value={hourly?.interval}
				/>
				<span>{__('hour(s)')}</span>
			</label>
		</div>
	);
};

export default Hourly;
