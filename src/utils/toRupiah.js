export const rupiah = (number) => {
	const options = {
		style: 'currency',
		currency: 'IDR',
		maximumFractionDigits: 0,
	};
	return new Intl.NumberFormat('id-ID', options).format(number);
};
