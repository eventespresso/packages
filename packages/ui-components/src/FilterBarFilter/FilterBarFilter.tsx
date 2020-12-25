import classNames from 'classnames';

type FilterBarFilterProps = {
	className?: string;
};

const FilterBarFilter: React.FC<FilterBarFilterProps> = ({ children, className }) => {
	return <div className={classNames('ee-filter-bar__filter', className)}>{children}</div>;
};

export default FilterBarFilter;
