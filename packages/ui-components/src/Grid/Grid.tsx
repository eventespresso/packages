import classNames from 'classnames';

import { Grid as GridAdapter, GridProps } from '@eventespresso/adapters';

import './style.scss';

export const Grid: React.FC<GridProps> = (props) => {
	const className = classNames('ee-grid', props.className);

	return <GridAdapter {...props} className={className} />;
};
