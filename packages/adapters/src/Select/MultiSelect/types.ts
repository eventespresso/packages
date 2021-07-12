import { Props as SelectProps } from 'react-select';

export type MultiSelectProps = SelectProps<{ label: string; value: string }, true>;
