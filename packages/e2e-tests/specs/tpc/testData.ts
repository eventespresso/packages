export const testData = {
	calculateTicketTotal: [
		{
			should: 'should calculate total ticket price for the given amount of Percent Discount',
			modifiers: { amount: '10', priceTypeLabel: 'Percent Discount' },
			expected: '10.35',
		},
		{
			should: 'should calculate total ticket price for the given amount of Dollar Discount',
			modifiers: { amount: '2', priceTypeLabel: 'Dollar Discount' },
			expected: '8.35',
		},
		{
			should: 'should calculate total ticket price for the given amount of Percent Surcharge',
			modifiers: { amount: '3', priceTypeLabel: 'Percent Surcharge' },
			expected: '8.6',
		},
		{
			should: 'should calculate total ticket price for the given amount of Dollar Surcharge',
			modifiers: { amount: '4', priceTypeLabel: 'Dollar Surcharge' },
			expected: '12.6',
		},
		{
			should: 'should calculate total ticket price for the given amount of Regional Tax',
			modifiers: { amount: '5', priceTypeLabel: 'Regional Tax' },
			expected: '13.23',
		},
		{
			should: 'should calculate total ticket price for the given amount of Federal Tax',
			modifiers: { amount: '6', priceTypeLabel: 'Federal Tax' },
			expected: '14.02',
		},
	],
};
