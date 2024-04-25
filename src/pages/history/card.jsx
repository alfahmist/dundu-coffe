import useMarketStore from '../../store/marketStore';
import bin from '../../assets/bin.svg';
const card = ({ product }) => {
	const {
		addToCart,
		setNotification,
		notification,
		updateQuantity,
		deleteProduct,
		setSelected,
	} = useMarketStore();
	const rupiah = (number) => {
		const options = {
			style: 'currency',
			currency: 'IDR',
		};
		return new Intl.NumberFormat('id-ID', options).format(number);
	};
	let harga = product.price * product.quantity;
	return (
		<>
			<div
				className={`flex flex-row w-full overflow-hidden mb-[20px] pb-[20px] `}
			>
				<img
					src={'/src/assets/images/' + product.image}
					alt={product.name}
					className='w-[80px] h-[80px] rounded-2xl'
				/>
				<div className='flex flex-col ml-4 w-full gap-2'>
					<p className='font-medium'>{product.name}</p>
					<div className='flex justify-between'>
						<p className='font-medium text-sm'>{rupiah(harga)}</p>
						<p className='font-medium text-sm'>x {product.quantity}</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default card;
