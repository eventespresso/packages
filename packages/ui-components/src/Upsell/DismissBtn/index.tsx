import { Clickable, ClickableProps } from '@eventespresso/adapters';
import { Close } from '@eventespresso/icons';
import './style.scss';

const DismissBtn: React.FC<ClickableProps> = (props) => {
	return (
		<Clickable {...props} className='ee-upsell__dismiss-btn'>
			<Close size='smaller' />
		</Clickable>
	);
};

export default DismissBtn;
