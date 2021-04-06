export async function clickButton(buttonText: string) {
	await page.click(`[type=button] >> text=${buttonText}`).catch(console.log);
}
