import { ButtonRow, ErrorIndicator, Heading, LoadingNotice } from '../..';
import type { EntityListProps } from './types';
import './style.scss';

export const EntityList: React.FC<EntityListProps> = ({
	activeFilters,
	className,
	entityList,
	error,
	filterBar,
	footer,
	headerText,
	legend,
	loading,
	pagination,
}) => {
	if (loading) return <LoadingNotice />;

	if (error) return <ErrorIndicator />;

	return (
		<div className={className}>
			<Heading as='h3' className='ee-entity-list__header'>
				{headerText}
			</Heading>

			{filterBar}

			{activeFilters}

			{entityList}

			<ButtonRow alignItems='start' justifyContent='space-between'>
				{legend}
				{pagination}
			</ButtonRow>

			<div className={'ee-entity-list__footer'}>{footer}</div>
		</div>
	);
};
