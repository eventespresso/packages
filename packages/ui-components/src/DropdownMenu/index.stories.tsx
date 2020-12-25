import type { Story, Meta } from '@storybook/react/types-6-0';

import { noop } from '@eventespresso/utils';
import { DropdownMenu, DropdownMenuItem } from './';
import type { DropdownMenuProps } from './types';

export default {
	component: DropdownMenu,
	title: 'Components/DropdownMenu',
} as Meta;

type DropdownMenuStory = Story<DropdownMenuProps>;

const words = [
	'About Visual Studio Code',
	'Check for updates',
	'Preferences',
	'Services',
	'Hide Visual Studio Code',
	'Show All',
];

const style = { minHeight: 500, paddingTop: 200 };

export const Basic: DropdownMenuStory = () => {
	return (
		<div style={style}>
			<DropdownMenu>
				{words.map((word) => (
					<DropdownMenuItem key={word} onClick={noop} title={word} />
				))}
			</DropdownMenu>
		</div>
	);
};

export const WithDisabledItem: DropdownMenuStory = () => (
	<>
		<DropdownMenu>
			<DropdownMenuItem>Search</DropdownMenuItem>
			<DropdownMenuItem>Undo</DropdownMenuItem>
			<DropdownMenuItem isDisabled>Delivery</DropdownMenuItem>
			<DropdownMenuItem>Unlink</DropdownMenuItem>
		</DropdownMenu>

		<DropdownMenu>
			<DropdownMenuItem>Search</DropdownMenuItem>
			<DropdownMenuItem>Undo</DropdownMenuItem>
			<DropdownMenuItem isDisabled>Delivery</DropdownMenuItem>
			<DropdownMenuItem>Unlink</DropdownMenuItem>
		</DropdownMenu>
	</>
);
