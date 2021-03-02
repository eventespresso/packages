import { useCallback } from 'react';

import { Button, ButtonType, ButtonRow, Divider } from '@eventespresso/ui-components';
import { __ } from '@eventespresso/i18n';
import { FormSpy } from '@eventespresso/form';
import { SaveOutlined } from '@eventespresso/icons';

import { useOnSaveChanges, useDomData } from '../../services/hooks';

const subscription = {
	pristine: true,
	submitting: true,
};

export const Footer: React.FC = () => {
	const saveChanges = useOnSaveChanges();
	const { deleteLink } = useDomData();

	const onDelete = useCallback(() => (window.location.href = deleteLink), [deleteLink]);

	return (
		<div className='footer-wrap'>
			<Divider />
			<ButtonRow>
				<Button
					// TODO make the color RED
					buttonType={ButtonType.MINIMAL}
					onClick={onDelete}
				>
					{__('Delete')}
				</Button>
				<FormSpy subscription={subscription}>
					{({ form, pristine, submitting }) => {
						// eslint-disable-next-line react-perf/jsx-no-new-function-as-prop
						const onReset = (e) => {
							e.preventDefault();
							form.reset();
						};

						return (
							<>
								<Button
									buttonText={__('Reset')}
									isDisabled={submitting || pristine}
									onClick={onReset}
									type='reset'
								/>
								<Button
									buttonText={__('Save Changes')}
									buttonType={ButtonType.PRIMARY}
									icon={SaveOutlined}
									isLoading={submitting}
									onClick={saveChanges}
									type='submit'
								/>
							</>
						);
					}}
				</FormSpy>
			</ButtonRow>
		</div>
	);
};
