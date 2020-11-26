import React from 'react';
import { useDisclosure } from '@chakra-ui/hooks';
import type { Story, Meta } from '@storybook/react/types-6-0';

import { Button, Modal } from '../';
import { ModalProps } from './types';

export default {
	component: Modal,
	title: 'Components/Modal',
} as Meta;

type ModalStory = Story<ModalProps>;

export const BasicUsage: ModalStory = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		<>
			<Button onClick={onOpen}>Open</Button>
			<Modal
				footerContent={
					<>
						<Button onClick={onClose}>Cancel</Button>
						<Button>Save</Button>
					</>
				}
				isOpen={isOpen}
				onClose={onClose}
				title='Welcome Home'
			>
				Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam
				incididunt duis in sint irure nisi.
			</Modal>
		</>
	);
};

export const WithScrollBehaviorOutside: ModalStory = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		<>
			<Button onClick={onOpen}>Open</Button>
			<Modal
				footerContent={
					<>
						<Button onClick={onClose}>Cancel</Button>
						<Button>Save</Button>
					</>
				}
				isOpen={isOpen}
				onClose={onClose}
				scrollBehavior='outside'
				title='Welcome Home'
			>
				Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam
				incididunt duis in sint irure nisi.
			</Modal>
		</>
	);
};

export const ReturnFocus: ModalStory = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const finalRef = React.useRef<any>();

	return (
		<>
			<Button ref={finalRef} tabIndex={-1} aria-label='Focus moved to this box' onClick={onOpen}>
				Some other content that will receive focus on close.
			</Button>

			<Button onClick={onOpen}>Open Modal</Button>

			<Modal
				finalFocusRef={finalRef}
				footerContent={
					<>
						<Button onClick={onClose}>Cancel</Button>
						<Button>Secondary Action</Button>
					</>
				}
				isOpen={isOpen}
				onClose={onClose}
				title='Modal Title'
			>
				Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam
				incididunt duis in sint irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit officia
				tempor esse quis.
			</Modal>
		</>
	);
};

export const NestedModal: ModalStory = () => {
	const first = useDisclosure();
	const second = useDisclosure();
	const third = useDisclosure();
	return (
		<>
			<Button onClick={first.onOpen}>Open</Button>
			<Modal
				footerContent={<Button onClick={second.onOpen}>Open Nested</Button>}
				isOpen={first.isOpen}
				onClose={first.onClose}
			>
				Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam
				incididunt duis in sint irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit officia
				tempor esse quis.
				<Modal
					footerContent={<Button onClick={third.onOpen}>Open Nested 2</Button>}
					isOpen={second.isOpen}
					onClose={second.onClose}
				>
					<Modal isOpen={third.isOpen} onClose={third.onClose} title='Modal 3 Title'>
						Modal 3
					</Modal>
				</Modal>
			</Modal>
		</>
	);
};
