import { withDataProvider } from '@eventespresso/data';
import { AttendeesEditProps } from './types';
import Controls from './controls';
import AttendeesDisplay from './AttendeesDisplay';

const EventAttendeesEdit: React.FC<AttendeesEditProps> = (props) => {
	return (
		<>
			<AttendeesDisplay {...props} />
			<Controls {...props} />
		</>
	);
};

export default withDataProvider(EventAttendeesEdit);
