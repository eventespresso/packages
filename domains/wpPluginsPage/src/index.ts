import $ from 'jquery';

// import global types.
import '../../../packages/types';

import './exitSurvey';
import './style.css';

$(() => {
	if ($('tr.ee-upsell-plugin-list-table').length > 0) {
		$('tr[data-slug="event-espresso"],tr[data-slug="event-espresso-decaf"]').addClass('update');
	}
});
