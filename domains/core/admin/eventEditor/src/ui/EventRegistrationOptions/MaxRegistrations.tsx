import classNames from 'classnames';

import { __ } from '@eventespresso/i18n';
import { GridItem, InlineEditText } from '@eventespresso/ui-components';
import type { EventRegistrationOptionsProps } from './types';

interface Props extends Pick<EventRegistrationOptionsProps, 'maxReg' | 'onMaxRegChange'> {}

const MaxRegistrations: React.FC<Props> = ({ maxReg, onMaxRegChange }) => {
	const className = classNames('ee-event-max-container');
	const id = 'ee-event-max-container';
	const strValue = maxReg && String(maxReg);

	return (
		<GridItem className={className} id={id} label={__('Max Registrations per Transaction')} size='micro'>
			<div className='ee-reg-option__value'>
				<InlineEditText
					aria-describedby={id}
					id={`${id}-inline-edit`}
					onChange={onMaxRegChange}
					tag='h4'
					value={strValue}
				/>
			</div>
		</GridItem>
	);
};

export default MaxRegistrations;
