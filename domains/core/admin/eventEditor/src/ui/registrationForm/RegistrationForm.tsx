import { __ } from '@eventespresso/i18n';
import { Heading, IconButton } from '@eventespresso/ui-components';
import { DragOutlined, Edit, Trash } from '@eventespresso/icons';
import { withFeature } from '@eventespresso/services';

const wrapper = {
	display: 'flex',
	flexFlow: 'column nowrap',
	margin: '1rem 0',
};

const container = {
	display: 'flex',
	flexFlow: 'row wrap',
	justifyContent: 'space-between',
	margin: '1rem 0',
};

const content = {
	background: 'var(--ee-background-color)',
	borderRadius: 'var(--ee-border-radius-default)',
	boxShadow: 'var(--ee-box-shadow-tiny-diffuse)',
	color: 'var(--ee-default-text-color)',
	display: 'flex',
	flexFlow: 'column wrap',
	margin: '0',
	padding: 'var(--ee-padding-small)',
	width: 'calc(100% - 300px - 1rem)',
};

const elementWrapper = {
	background: 'var(--ee-color-grey-14)',
	borderRadius: '3px',
	color: 'var(--ee-default-text-color)',
	display: 'flex',
	flexFlow: 'column wrap',
	margin: ' 0 0 2rem',
	padding: 'var(--ee-padding-small)',
};

const inputWrapper = {
	alignContent: 'flex-start',
	display: 'flex',
	flexFlow: 'column wrap',
	height: '50px',
	width: '50%',
};
const typeStyle = {
	alignContent: 'center',
	color: 'var(--ee-default-text-color-super-low-contrast)',
	display: 'flex',
	flexFlow: 'column wrap',
	height: '50px',
	justifyContent: 'center',
	padding: '.75rem .5rem 0',
	width: '15%',
};
const actionsStyle = {
	alignContent: 'center',
	display: 'flex',
	flexFlow: 'row wrap',
	height: '50px',
	justifyContent: 'flex-end',
	width: '35%',
};

const elementStyle = {
	display: 'flex',
	flexFlow: 'row wrap',
};
const labelStyle = {
	display: 'block',
};
const btnStyle = {
	margin: '0 .25rem',
};
const inputStyle = {
	display: 'block',
	width: '100%',
};

const tabs = {
	background: 'var(--ee-background-color)',
	color: 'var(--ee-default-text-color)',
	display: 'flex',
	flexFlow: 'column wrap',
	margin: '1rem 0 0',
	padding: '0 var(--ee-padding-small) var(--ee-padding-small)',
	minHeight: '100px',
	width: '100%',
};

const sidebar = {
	background: 'var(--ee-background-color)',
	borderRadius: 'var(--ee-border-radius-default)',
	boxShadow: 'var(--ee-box-shadow-tiny-diffuse)',
	color: 'var(--ee-default-text-color)',
	display: 'flex',
	flexFlow: 'column wrap',
	margin: ' 0',
	padding: '0 var(--ee-padding-small) var(--ee-padding-small)',
	width: '300px',
};

const sidebarItems = {
	display: 'grid',
	gridGap: 'var(--ee-padding-smaller)',
	gridTemplateColumns: '1fr 1fr',
	margin: '1rem 0 0',
};

const sidebarItem = {
	alignContent: 'center',
	background: 'var(--ee-background-color)',
	borderRadius: 'var(--ee-border-radius-small)',
	border: '1px solid #999',
	color: 'var(--ee-default-text-color-low-contrast)',
	cursor: 'move',
	display: 'flex',
	flexFlow: 'column wrap',
	fontWeight: 500,
	padding: 'var(--ee-padding-tiny)',
};

export const RegistrationForm: React.FC = () => {
	return (
		<div className='ee-edtr-section' style={wrapper}>
			<Heading as='h3'>{__('Registration Form Builder')}</Heading>
			<div style={container}>
				<div style={content}>
					<div style={elementWrapper}>
						<div style={elementStyle}>
							<div style={inputWrapper}>
								<label htmlFor='ee-first-name-input' style={labelStyle}>
									First Name
								</label>
								<input type='text' id='ee-first-name-input' style={inputStyle} />
							</div>
							<div style={typeStyle}>Text Input</div>
							<div style={actionsStyle}>
								<IconButton icon={Edit} borderless size='smaller' transparentBg style={btnStyle} />
								<IconButton icon={Trash} borderless size='smaller' transparentBg style={btnStyle} />
								<IconButton
									icon={DragOutlined}
									borderless
									size='smaller'
									transparentBg
									style={btnStyle}
								/>
							</div>
						</div>
						<div style={tabs}>tabs go here but are hidden until edit button is pressed</div>
					</div>
				</div>
				<div style={sidebar}>
					<Heading as='h5'>{__('Form Elements')}</Heading>
					<div style={sidebarItems}>
						<div style={sidebarItem}>Form Section</div>
						<div style={sidebarItem}>Heading</div>
						<div style={sidebarItem}>Text Block</div>
						<div style={sidebarItem}>Text Input</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default withFeature('use_reg_form_builder')(RegistrationForm);
