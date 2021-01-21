import { PatternEditor } from '../recurrence';
import { DatetimeDetails } from '../datetimeDetails';
import { GeneratedDates } from '../generatedDates';
import Steps from './Steps';
import Tickets from '../Tickets';
import { useStepsState } from '../../context';
import { DATE_DETAILS_STEP, GENERATED_DATES_STEP, PATTERN_EDITOR_STEP, TICKETS_STEP } from './constants';

const ContentBody: React.FC = () => {
	const { current } = useStepsState();

	return (
		<>
			<Steps current={current} />
			{current === PATTERN_EDITOR_STEP && <PatternEditor />}
			{current === DATE_DETAILS_STEP && <DatetimeDetails />}
			{current === TICKETS_STEP && <Tickets />}
			{current === GENERATED_DATES_STEP && <GeneratedDates />}
		</>
	);
};

export default ContentBody;
