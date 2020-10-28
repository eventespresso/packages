import type { User } from '@eventespresso/data';

export const CurrentUser = (userData: User): User => {
	return {
		id: userData?.id,
		capabilities: userData?.capabilities,
		description: userData?.description,
		email: userData?.email,
		firstName: userData?.firstName,
		name: userData?.name,
		nicename: userData?.nicename,
		nickname: userData?.nickname,
		lastName: userData?.lastName,
		locale: userData?.locale,
		username: userData?.username,
	};
};
