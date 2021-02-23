import OptionsModalButton from './OptionsModalButton';
import { NewDateOptions } from '@eventespresso/edtr-services';

const NewDateButton: React.FC = () => {
	return (
		<NewDateOptions>
			{(fills) => {
				if (fills.length > 1) {
					return <OptionsModalButton>{fills}</OptionsModalButton>;
				}
				return <>{fills}</>;
			}}
		</NewDateOptions>
	);
};

export default NewDateButton;
