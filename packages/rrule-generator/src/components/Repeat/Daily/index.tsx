import { __ } from '@eventespresso/i18n';
import { Divider, NumberInput } from '@eventespresso/ui-components';

import { useRRuleState } from '../../../hooks';
import { useIntervalUpdater } from '../../../utils';
import type { BaseProps } from '../../types';

const Daily: React.FC<BaseProps> = ({ id }) => {
	const {
		repeat: { daily },
		setRepeatInterval,
	} = useRRuleState();

	const onChangeInterval = useIntervalUpdater('daily', setRepeatInterval);

	return (
		<div className='rrule-generator__form-group-row rrule-generator__form-group-row--align-items-start rrule-generator__form-group-row--no-label rrule-generator__repeat-daily'>
			<label className='rrule-generator__labelled-input'>
				<span>{__('every')}</span>
				<Divider orientation='vertical' size='tiny' />
				<NumberInput
					aria-label={__('Repeat daily interval')}
					id={`${id}-interval`}
					name={`${id}-interval`}
					onChange={onChangeInterval}
					showStepper={false}
					value={daily?.interval}
					visibleDigits={3}
				/>
				<span>{__('day(s)')}</span>
			</label>
		</div>
	);
};

export default Daily;
