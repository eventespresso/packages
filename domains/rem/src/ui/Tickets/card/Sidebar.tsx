import { BaseProps } from '../types';
import { Edit, Trash } from '../actions';

const Sidebar: React.FC<BaseProps> = ({ ticket }) => {
	return (
		<div className='ee-ticket-sidebar'>
			<Edit ticket={ticket} />
			<Trash ticket={ticket} />
		</div>
	);
};

export default Sidebar;
