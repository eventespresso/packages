interface Props {
	layout: '1' | '2';
}

export async function screenOptions({ layout }: Props) {
	if (layout) {
		await page.click('#show-settings-link');
		await page.click(`.columns-prefs-${layout} input`);
		await page.click('#show-settings-link');
	}
}
