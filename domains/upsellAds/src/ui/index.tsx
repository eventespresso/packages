import { renderDomElement } from '@eventespresso/utils';

import { ContextProvider } from '../services/context';

import { UpsellAdsEditor } from './UpsellAdsEditor';

import '../../../../packages/styles/src/themes/default/index.scss'; // to bundle it

const Editor: React.FC = () => (
	<ContextProvider>
		<UpsellAdsEditor />
	</ContextProvider>
);

const setupEditor = (): void => {
	renderDomElement({
		appendToTarget: false,
		domElementToRender: <Editor />,
		containerID: 'es-upsell-editor',
		containerClassName: 'es-upsell-container',
		targetElementID: 'normal-sortables',
	});
};

setupEditor();
