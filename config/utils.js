const EVENTESPRESSO_NAMESPACE = '@eventespresso/';
const BUNDLED_PACKAGES = ['@eventespresso/icons'];
const WORDPRESS_NAMESPACE = '@wordpress/';

/**
 * Request to global transformation
 *
 * Transform @eventespresso dependencies:
 *
 *   request `@eventespresso/edtr-services` becomes `eventespresso.edtrServices`
 *
 * @type {import('.').RequestToExternal}
 */
function requestToExternal(request) {
	// eslint-disable-next-line default-case
	switch (request) {
		case 'jquery':
			return 'jQuery';

		case 'react':
			return 'React';

		case 'react-dom':
			return 'ReactDOM';
	}

	if (BUNDLED_PACKAGES.includes(request)) {
		return undefined;
	}

	if (request.startsWith(EVENTESPRESSO_NAMESPACE)) {
		return ['eventespresso', camelCaseDash(request.substring(EVENTESPRESSO_NAMESPACE.length))];
	}

	if (request.startsWith(WORDPRESS_NAMESPACE)) {
		return ['wp', camelCaseDash(request.substring(WORDPRESS_NAMESPACE.length))];
	}
}

/**
 * Request to Eventespresso script handle transformation
 *
 * Transform @eventespresso dependencies:
 *
 *   request `@eventespresso/edtr-services` becomes `eventespresso-edtr-services`
 *   request `@eventespresso/escape-html` becomes `eventespresso-escape-html`
 *
 * @type {import('.').RequestToHandle}
 */
function requestToHandle(request) {
	if (request.startsWith(EVENTESPRESSO_NAMESPACE)) {
		return 'eventespresso-' + camelCaseDash(request.substring(EVENTESPRESSO_NAMESPACE.length));
	}
	if (request.startsWith(WORDPRESS_NAMESPACE)) {
		return 'wp-' + request.substring(WORDPRESS_NAMESPACE.length);
	}
}

/**
 * Given a string, returns a new string with dash separators converted to
 * camelCase equivalent.
 *
 * @param {string} string Input dash-delimited string.
 *
 * @return {string} Camel-cased string.
 */
function camelCaseDash(string) {
	return string.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
}

/**
 * Gets CLI args as object.
 */
function getCommandArgs() {
	const argList = process.argv;

	const arg = {};
	let a, opt, thisOpt, curOpt;
	for (a = 0; a < argList.length; a++) {
		thisOpt = argList[a].trim();
		opt = thisOpt.replace(/^-+/, '');

		if (opt === thisOpt) {
			// argument value
			if (curOpt) {
				arg[curOpt] = opt;
			}
			curOpt = null;
		} else {
			// argument name
			curOpt = opt;
			arg[curOpt] = true;
		}
	}
	return arg;
}

module.exports = {
	camelCaseDash,
	requestToExternal,
	requestToHandle,
	getCommandArgs,
};
