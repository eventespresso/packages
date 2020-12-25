import { __ } from '@eventespresso/i18n';
import { BaseProps } from '../../types';
import { useRRuleState } from '../../../hooks';
import { useIntervalUpdater } from '../../../utils';

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
				<input
					aria-label={__('Repeat daily interval')}
					className='rrule-generator__form-control rrule-generator__input'
					id={`${id}-interval`}
					name={`${id}-interval`}
					onChange={onChangeInterval}
					type='number'
					value={daily?.interval}
				/>
				<span>{__('day(s)')}</span>
			</label>
		</div>
	);
};

export default Daily;
