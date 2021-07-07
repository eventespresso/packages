import type { AnyObject } from '@eventespresso/utils';
import { DatePicker, MonthPicker, TimePicker } from '@eventespresso/dates';
import {
	TextInput,
	MultiCheckbox,
	NumberInput,
	Textarea,
	Select,
	RadioGroup,
	Switch,
	withLabel,
} from '@eventespresso/ui-components';
import { SimpleTextEditor } from '@eventespresso/rich-text-editor';

import { ElementType } from '../types';

const DefaultComponent = () => null;

export interface MappedElementProps {
	type: ElementType;
}

/**
 * This component renders the appropriate Component for the given element type.
 * The props to the Component must be passed by the consumer
 */
const MappedComponent: React.FC<MappedElementProps> = ({ type, ...props }) => {
	let Component: React.ComponentType<AnyObject>;

	switch (type) {
		// DATE & TIME RELATED INPUTS
		case 'DATE':
		case 'DATETIME_LOCAL':
			Component = DatePicker;
			break;
		case 'MONTH':
			Component = MonthPicker;
			break;
		case 'TIME':
			Component = TimePicker;
			break;
		// MULTI OPTION RELATED INPUTS
		case 'CHECKBOX_MULTI':
			Component = MultiCheckbox;
			break;
		case 'RADIO':
			Component = RadioGroup;
			break;
		case 'SELECT':
		case 'SELECT_COUNTRY':
		case 'SELECT_STATE':
		case 'DAY_SELECT':
		case 'MONTH_SELECT':
		case 'YEAR_SELECT':
			Component = Select;
			break;
		case 'SWITCH':
			Component = Switch;
			break;
		// NUMERIC INPUTS
		case 'INTEGER':
		case 'DECIMAL':
			Component = NumberInput;
			break;
		// TEXT RELATED INPUTS
		case 'EMAIL':
		case 'EMAIL_CONFIRMATION':
		case 'PASSWORD':
		case 'TEL':
		case 'TEXT':
		case 'URL':
			Component = TextInput;
			break;
		case 'TEXTAREA':
		case 'TEXTAREA_HTML':
			Component = Textarea;
			break;
		case 'HTML':
			Component = SimpleTextEditor;
			break;
		default:
			Component = DefaultComponent;
			break;
	}

	return <Component {...props} />;
};

export const MappedElement = withLabel(MappedComponent);
