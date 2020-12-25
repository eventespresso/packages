import { InspectorControls } from '@wordpress/block-editor';
import { __ } from '@eventespresso/i18n';
import { PanelBody } from '@wordpress/components';

import { AttendeesEditProps } from '../types';
import AttendeeLimit from './AttendeeLimit';
import ArchiveSettings from './ArchiveSettings';
import GravatarSettings from './GravatarSettings';
import SelectDatetime from './SelectDatetime';
import SelectEvent from './SelectEvent';
import SelectOrder from './SelectOrder';
import SelectOrderBy from './SelectOrderBy';
import SelectStatus from './SelectStatus';
import SelectTicket from './SelectTicket';

const Controls: React.FC<AttendeesEditProps> = (props) => {
	const { datetime, event } = props.attributes;

	return (
		<InspectorControls>
			<PanelBody title={__('Filter By Settings')}>
				<SelectEvent {...props} />

				{event && <SelectDatetime {...props} />}

				{event && datetime && <SelectTicket {...props} />}

				<SelectStatus {...props} />

				<AttendeeLimit {...props} />

				<SelectOrderBy {...props} />

				<SelectOrder {...props} />
			</PanelBody>
			<PanelBody title={__('Gravatar Setttings')}>
				<GravatarSettings {...props} />
			</PanelBody>
			<PanelBody title={__('Archive Settings')}>
				<ArchiveSettings {...props} />
			</PanelBody>
		</InspectorControls>
	);
};

export default Controls;
