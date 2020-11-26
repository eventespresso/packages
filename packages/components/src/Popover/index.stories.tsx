import React from 'react';
import { useDisclosure } from '@chakra-ui/hooks';
import type { Story, Meta } from '@storybook/react/types-6-0';

import { Button, Popover } from '../';
import { PopoverProps } from '@eventespresso/adapters';

export default {
	component: Popover,
	title: 'Components/Popover',
} as Meta;

type PopoverStory = Story<PopoverProps>;

export const Simple: PopoverStory = () => (
	<Popover
		content='Are you sure you want to have this popover?'
		header='Header'
		trigger={<Button>Open popover</Button>}
	/>
);

export const Basic: PopoverStory = () => (
	<Popover
		content={
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
				dolore magna aliqua.
			</p>
		}
		header='Header'
		placement='top'
		trigger={<Button>Open popover</Button>}
	/>
);

export const ControlledUsage: PopoverStory = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<>
			<Button onClick={onOpen}>Trigger</Button>
			<Popover
				content={<p>Are you sure you want to continue with your action?</p>}
				isOpen={isOpen}
				onClose={onClose}
				placement='right'
				closeOnBlur={false}
				trigger={<Button>Popover Target</Button>}
			></Popover>
		</>
	);
};
