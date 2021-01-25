import { SimpleTicketsList } from '@eventespresso/ee-components';

import { PatternEditor } from '../recurrence';
import { DatetimeDetails } from '../datetimeDetails';
import { GeneratedDates } from '../generatedDates';
import Steps from './Steps';
import { useStepsState } from '../../context';
import { useFormState } from '../../data';
import { DATE_DETAILS_STEP, GENERATED_DATES_STEP, PATTERN_EDITOR_STEP, TICKETS_STEP } from './constants';

const ContentBody: React.FC = () => {
	const formState = useFormState();
	const { current } = useStepsState();

	return (
		<>
			<Steps current={current} />
			{current === PATTERN_EDITOR_STEP && <PatternEditor />}

			{current === DATE_DETAILS_STEP && <DatetimeDetails />}
			{
				// @ts-ignore
				current === TICKETS_STEP && <SimpleTicketsList formState={formState} />
			}
			{current === GENERATED_DATES_STEP && <GeneratedDates />}
		</>
	);
};

export default ContentBody;
