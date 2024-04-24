products = [
	{
		id: 1,
		name: 'affogate',
		price: '25000',
		stock: '2',
		image: 'affogato.jpg',
	},
	{
		id: 2,
		name: 'cappucino ice',
		price: '27000',
		stock: '6',
		image: 'cappucino-ice.jpg',
	},
	{
		id: 3,
		name: 'golden salted caramel',
		price: '45000',
		stock: '10',
		image: 'golden-salted-caramel.jpg',
	},
	{
		id: 4,
		name: 'nasi goreng special',
		price: '45000',
		stock: '4',
		image: 'nasi-goreng-special.jpg',
	},
	{
		id: 5,
		name: 'soto ayam mini',
		price: '35000',
		stock: '4',
		image: 'soto-mini.jpg',
	},
	{
		id: 6,
		name: 'tomyam mini',
		price: '45000',
		stock: '4',
		image: 'tomyam-mini.jpg',
	},
];

orderHistory: [
	{
		product: [...cart],
		date: new Date(),
		totalPrice: 25000,
		totalItem: 1,
	},
];
