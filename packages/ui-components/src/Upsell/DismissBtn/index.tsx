import { Clickable } from '@eventespresso/adapters';
import { Close } from '@eventespresso/icons';
import './style.scss';

const DismissBtn: React.FC = () => {
	return (
		<Clickable className='ee-upsell__dismiss-btn'>
			<Close size='smaller' />
		</Clickable>
	);
};

export default DismissBtn;
