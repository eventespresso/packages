import { Edit, Trash } from '../actions';
import type { BaseProps } from '../types';

const Sidebar: React.FC<BaseProps> = ({ ticket }) => {
	return (
		<div className='ee-ticket-sidebar'>
			<Edit ticket={ticket} />
			<Trash ticket={ticket} />
		</div>
	);
};

export default Sidebar;
