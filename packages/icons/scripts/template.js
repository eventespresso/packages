function defaultTemplate({ template }, opts, { imports, interfaces, componentName, props, jsx, exports }) {
	const plugins = ['jsx'];
	if (opts.typescript) {
		plugins.push('typescript');
	}
	const typeScriptTpl = template.smart({ plugins });

	return typeScriptTpl.ast`${imports}
	
	import withEnhance from '../withEnhance';
	import { IconProps } from '../types';	

	${interfaces}

	const ${componentName} = (props: IconProps): JSX.Element => {
		return ${jsx};
	}

	export default withEnhance(${componentName});
	`;
}
module.exports = defaultTemplate;
