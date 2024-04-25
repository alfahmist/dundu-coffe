import useMarketStore from '../../store/marketStore';

const card = ({ product }) => {
	const { addToCart, setNotification, notification } = useMarketStore();
	const rupiah = (number) => {
		const options = {
			style: 'currency',
			currency: 'IDR',
		};
		return new Intl.NumberFormat('id-ID', options).format(number);
	};

	return (
		<>
			<div
				className={`flex flex-row border-2 w-full flex-wrap rounded-2xl overflow-hidden mb-4`}
			>
				<img src={'/src/assets/images/' + product.image} alt={product.name} />
				<div className='flex flex-col p-4 h-[170px] '>
					<div className='flex flex-row items-center justify-between'>
						<p className='font-medium max-w-[100px] h-[50px] mb-2'>
							{product.name}
						</p>
						<p className='font-normal text-xs self-start mt-1'>
							stock : {product.stock}
						</p>
					</div>
					<div className='flex flex-row justify-between items-center'>
						<p className='font-normal text-sm'>{rupiah(product.price)}</p>
						{product.stock !== 0 ? (
							<p className='font-medium text-xs '>Stock Tersedia</p>
						) : (
							<p className='font-medium text-xs '>Stock Tidak Tersedia</p>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default card;
