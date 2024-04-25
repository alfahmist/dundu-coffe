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

	return (
		<>
			<div
				className={`flex flex-row h-[150px] w-full flex-wrap overflow-hidden mb-[50px] pb-[20px]  gap-2 border-b-2 `}
			>
				<input
					type='checkbox'
					className='self-start w-[18px] h-[18px] mr-4'
					onChange={() => {
						setSelected(product.id);
					}}
					checked={product.isSelected}
				/>
				<img
					src={'/src/assets/images/' + product.image}
					alt={product.name}
					className='w-[80px] h-[80px] rounded-2xl'
				/>
				<div className='flex flex-col ml-4 gap-2'>
					<p className='font-medium'>{product.name}</p>
					<p className='font-medium text-sm'>{rupiah(product.price)}</p>
				</div>
				<div className='flex w-full justify-end items-center gap-2 '>
					<button
						onClick={() => {
							confirm('delete') ? deleteProduct(product.id) : null;
						}}
						className='mr-[20px]'
					>
						<img src={bin} alt='bin' />
					</button>

					{product.quantity > 1 ? (
						<button
							onClick={() => updateQuantity(product.id, product.quantity - 1)}
							className='text-2xl border border-red-400 rounded-full h-[30px] w-[30px] leading-[20px] hover:bg-red-400 active:bg-red-500  '
						>
							-
						</button>
					) : (
						<button className='text-2xl border border-slate-200 rounded-full h-[30px] w-[30px] leading-[20px] bg-slate-200 text-slate-500 cursor-default'>
							-
						</button>
					)}

					<span className='w-[40px] text-center'>{product.quantity}</span>
					<button
						onClick={() => updateQuantity(product.id, product.quantity + 1)}
						className='text-2xl border border-red-400 rounded-full h-[30px] w-[30px] leading-[20px] hover:bg-red-400 active:bg-red-500 '
					>
						+
					</button>
				</div>
			</div>
		</>
	);
};

export default card;
