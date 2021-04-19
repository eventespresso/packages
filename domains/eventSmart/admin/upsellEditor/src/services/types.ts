import type { UpsellAd } from './apollo';

export interface UpsellAdEditorData {
	capabilities: Array<string>;
	upsellAd?: UpsellAd;
	deleteLink?: string;
}
