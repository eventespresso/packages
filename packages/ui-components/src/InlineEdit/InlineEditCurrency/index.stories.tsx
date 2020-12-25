import type { Story, Meta } from '@storybook/react/types-6-0';

import { InlineEditCurrency } from './';
import type { InlineEditCurrencyProps } from './types';

export default {
	component: InlineEditCurrency,
	title: 'Components/InlineEdit/InlineEditCurrency',
} as Meta;

type InlineEditCurrencyStory = Story<InlineEditCurrencyProps>;

export const Basic: InlineEditCurrencyStory = () => <InlineEditCurrency amount={10} id='test-id' />;
