import type { AnyObject } from '@eventespresso/utils';
import { DatePicker, TimePicker } from '@eventespresso/dates';
import { TextInput, MultiCheckbox, NumberInput, Textarea, Select, RadioGroup, Switch } from '../../';
import { withLabel } from '../../withLabel';

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
		case 'checkbox-multi':
			Component = MultiCheckbox;
			break;
		case 'date':
		case 'datetime-local':
			Component = DatePicker;
			break;
		case 'email':
		case 'email-confirmation':
		case 'password':
		case 'tel':
		case 'text':
		case 'url':
			Component = TextInput;
			break;
		case 'html':
		case 'textarea':
		case 'textarea-html':
			Component = Textarea;
			break;
		case 'integer':
		case 'decimal':
			Component = NumberInput;
			break;
		case 'month':
		case 'month-select':
		case 'week':
		case 'year-select':
			Component = DatePicker;
			break;
		case 'radio':
			Component = RadioGroup;
			break;
		case 'select':
		case 'select-country':
		case 'select-state':
			Component = Select;
			break;
		case 'switch':
			Component = Switch;
			break;
		case 'time':
			Component = TimePicker;
			break;
		default:
			Component = DefaultComponent;
			break;
	}

	return <Component {...props} />;
};

export const MappedElement = withLabel(MappedComponent);
