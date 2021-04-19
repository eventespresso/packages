import type { Entity } from '@eventespresso/data';

export interface UpsellAd extends Entity {
	actionHook: string;
	altCTALink: string;
	altCTAStyle: string;
	altCTAText: string;
	cTA: string;
	cTALink: string;
	cTAStyle: string;
	containerClass: string;
	excludedCaps: string;
	image: string;
	isDismissable: boolean;
	isForEventEditor: boolean;
	location: string;
	mainText: string;
	mainTitle: string;
	orientation: 'vertical' | 'horizontal';
	page: string;
	pagenow: string;
	postType: string;
	route: string;
	showForCaps: string;
	subTitle: string;
	templateId: 'base' | 'compact' | 'with-bg-image' | 'with-options';
}

export interface UpsellAdData {
	espressoUpsellAd: UpsellAd;
}
