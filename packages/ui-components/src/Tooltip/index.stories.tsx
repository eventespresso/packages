import React from 'react';
import type { Story, Meta } from '@storybook/react/types-6-0';

import { Tooltip } from '../';
import { Button, TooltipProps } from '@eventespresso/adapters';

export default {
	component: Tooltip,
	title: 'Components/Tooltip',
} as Meta;

type TooltipStory = Story<TooltipProps>;

export const WithButton: TooltipStory = () => (
	<Tooltip tooltip='This is a chakra tooltip' placement='bottom'>
		<Button>Hover me</Button>
	</Tooltip>
);

export const WithString: TooltipStory = () => <Tooltip tooltip='This is a chakra tooltip'>Hover me</Tooltip>;

export const WithDisabledButton: TooltipStory = () => (
	<Tooltip tooltip='Oh oh oh, oh oh'>
		<Button isDisabled>Disabled</Button>
	</Tooltip>
);

export const WithWrappedDisabledButton: TooltipStory = () => (
	<Tooltip tooltip='Hello world' shouldWrapChildren>
		<Button isDisabled>Hover me</Button>
	</Tooltip>
);

export const WithIsOpenProp: TooltipStory = () => (
	<Tooltip tooltip='Hello world' isOpen hasArrow>
		<Button isDisabled>Disabled</Button>
	</Tooltip>
);

export const WithDefaultIsOpenProp: TooltipStory = () => (
	<Tooltip tooltip='Hello world' defaultIsOpen>
		<Button>Click me</Button>
	</Tooltip>
);
