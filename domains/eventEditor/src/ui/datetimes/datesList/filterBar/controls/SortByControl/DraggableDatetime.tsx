import { rangeFormat } from '@eventespresso/dates';
import type { Datetime } from '@eventespresso/edtr-services';

const DraggableDatetime: React.FC<Datetime> = ({ dbId, endDate, name, startDate }) => (
	<>
		<span>{dbId})</span>
		<span>{name}: </span>
		<span>
			{rangeFormat({
				formatTokens: { month: 'LLL' },
				range: [new Date(startDate), new Date(endDate)],
				showTime: true,
			})}
		</span>
	</>
);

export default DraggableDatetime;
