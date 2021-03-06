import $ from 'jquery';

import ExitSurvey from './ExitSurvey';
// avoid loading whole services package
import renderDomElement from '../../../../../../packages/utils/src/dom/renderDomElement';

const info = window?.eventEspressoData?.wpPluginsPage?.eeExitSurveyInfo;

/**
 * Handler for deactivation trigger
 */
const handleDeactivationClick = (e: JQuery.ClickEvent<HTMLElement>, el: any): void => {
	e.preventDefault();
	const url = $(el).attr('href');

	renderDomElement({
		appendToTarget: false,
		domElementToRender: <ExitSurvey deactivationUrl={url} />,
		containerID: 'ee-exit-survey-modal',
		targetElementID: 'wpfooter',
	});
};
/**
 * EE caffeinated click capture but only if feature is active
 */
if (info?.isModalActive) {
	// register event handlers on document ready
	$(() => {
		$('tr[data-slug="event-espresso"]').on('click', 'span.deactivate > a', function (e) {
			e.preventDefault();
			handleDeactivationClick(e, this);
		});

		/**
		 * EE decaf click capture.
		 */
		$('tr[data-slug="event-espresso-decaf"]').on('click', 'span.deactivate > a', function (e) {
			handleDeactivationClick(e, this);
		});
	});
}
