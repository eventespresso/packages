import { useCallback } from 'react';
import $ from 'jquery';

import { useForm } from '@eventespresso/form';
import { useSystemNotifications } from '@eventespresso/toaster';
import { __ } from '@eventespresso/i18n';

type Callback = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;

const title = $('input[name=post_title]');
const publish = $('input#publish');

const savePost = () => publish.trigger('click');

export const useOnSaveChanges = (): Callback => {
	const { submit, getState: getFormState } = useForm();
	const { warning } = useSystemNotifications();

	const saveChanges = useCallback<Callback>(
		async (e) => {
			e.preventDefault();
			const { dirty } = getFormState();

			if (!title.val()) {
				warning({ message: __('Please add a title.') });
			} else if (!dirty) {
				savePost();
			} else {
				try {
					await submit();
					// Ensure the post is updated/published
					savePost();
				} catch (e) {
					// mutation with feedback handles this for us
				}
			}
		},
		[getFormState, submit, warning]
	);

	return saveChanges;
};
