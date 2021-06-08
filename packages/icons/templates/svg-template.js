// convert to kebab case logic from:
// https://javascript.plainenglish.io/convert-string-to-different-case-styles-snake-kebab-camel-and-pascal-case-in-javascript-da724b7220d7
const regex = /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g;
const convertClassName = (jsxClassName) =>
	jsxClassName
		.match(regex)
		.map((x) => x.toLowerCase())
		.join('-');

const updateJsxAttributes = (componentClass, jsx) => {
	if (typeof jsx.openingElement === 'object' && Array.isArray(jsx.openingElement.attributes)) {
		let found = false;
		const jsxClassName = `ee-svg--${componentClass}`;
		jsx.openingElement.attributes.forEach(function (jsxAttribute) {
			if (jsxAttribute.name && jsxAttribute.name.name === 'className') {
				// eslint-disable-next-line no-param-reassign
				jsxAttribute.value.value = jsxClassName;
				found = true;
			}
		});
		if (!found) {
			jsx.openingElement.attributes.push({
				type: 'JSXAttribute',
				name: { type: 'JSXIdentifier', name: 'className' },
				value: { type: 'StringLiteral', value: jsxClassName },
			});
		}
	}
	return jsx;
};

function defaultTemplate({ template }, opts, { componentName, jsx }) {
	const iconName = componentName.name.replace('Svg', '');
	const componentClass = convertClassName(iconName);
	const newJsx = updateJsxAttributes(componentClass, jsx);

	const plugins = ['jsx'];
	if (opts.typescript) {
		plugins.push('typescript');
	}
	const typeScriptTpl = template.smart({ plugins });

	return typeScriptTpl.ast`import withClassName from '../withClassName';
	import { IconProps } from '../types';

	const ${iconName} = (props: IconProps): JSX.Element => {
		return ${newJsx};
	}

	export default withClassName(${iconName}, '${componentClass}');
	`;
}

module.exports = defaultTemplate;
