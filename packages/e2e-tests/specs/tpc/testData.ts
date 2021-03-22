export const testData = {
	calculateTicketTotal: [
		{
			should: 'should calculate total ticket price for the given amount of Percent Discount',
			modifiers: { amount: '10', priceTypeLabel: 'Percent Discount' },
			expected: '9', // Subtract 10% of 10 (i.e. 1) from 10
		},
		{
			should: 'should calculate total ticket price for the given amount of Dollar Discount',
			modifiers: { amount: '2', priceTypeLabel: 'Dollar Discount' },
			expected: '8', // Subtract 2 from 10
		},
		{
			should: 'should calculate total ticket price for the given amount of Percent Surcharge',
			modifiers: { amount: '3', priceTypeLabel: 'Percent Surcharge' },
			expected: '10.3', // Add 3% of 10 (i.e. 0.3) to 10
		},
		{
			should: 'should calculate total ticket price for the given amount of Dollar Surcharge',
			modifiers: { amount: '4', priceTypeLabel: 'Dollar Surcharge' },
			expected: '14', // Add 4 10
		},
		{
			should: 'should calculate total ticket price for the given amount of Regional Tax',
			modifiers: { amount: '5', priceTypeLabel: 'Regional Tax' },
			expected: '10.5', // Add 5% of 10 (i.e. 0.5) to 10
		},
		{
			should: 'should calculate total ticket price for the given amount of Federal Tax',
			modifiers: { amount: '6', priceTypeLabel: 'Federal Tax' },
			expected: '10.6', // Add 6% of 10 (i.e. 0.6) to 10
		},
	],
};
