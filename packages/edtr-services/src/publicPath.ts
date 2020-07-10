/* eslint-disable 
no-unused-vars,
no-native-reassign,
no-global-assign,
@typescript-eslint/no-unused-vars,
no-var
*/
/* global __webpack_public_path__ */
declare var __webpack_public_path__: string;
let assetsUrl = window.baristaAsselsUrl || window?.eventEspressoData?.config?.coreDomain?.distributionAssetsUrl;

__webpack_public_path__ = assetsUrl;

// not needed
export default assetsUrl = __webpack_public_path__;

declare global {
	interface Window {
		baristaAsselsUrl: string;
	}
}
