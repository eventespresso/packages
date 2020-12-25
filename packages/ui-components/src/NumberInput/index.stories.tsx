import type { Story, Meta } from '@storybook/react/types-6-0';

import { NumberInput } from './';
import { NumberInputProps } from '@eventespresso/adapters';

export default {
	component: NumberInput,
	title: 'Components/NumberInput',
} as Meta;

type NumberInputStory = Story<NumberInputProps>;

export const with3VisibleDigits: NumberInputStory = () => (
	<NumberInput defaultValue={365} showStepper={false} visibleDigits={3} />
);

export const withMinAndMax: NumberInputStory = () => <NumberInput defaultValue={15} min={10} max={20} />;

export const withStep: NumberInputStory = () => <NumberInput defaultValue={15} min={10} max={30} step={5} />;

export const withPrecision: NumberInputStory = () => <NumberInput defaultValue={15} precision={2} step={0.2} />;

export const withClampValueDisabled: NumberInputStory = () => (
	<NumberInput defaultValue={15} max={30} clampValueOnBlur={false} />
);

export const allowOutOfRange: NumberInputStory = () => (
	<NumberInput defaultValue={15} max={10} keepWithinRange={false} clampValueOnBlur={false} />
);
