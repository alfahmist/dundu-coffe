import { rupiah } from '../../utils/toRupiah';
const CheckoutItem = ({ product }) => {
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
					<div className='flex'>
						<p className='font-medium text-sm'>{product.quantity}x&nbsp;</p>
						<p className='font-medium text-sm'>
							@{rupiah(product.price).slice(2)}
						</p>
						<p className='font-medium text-sm ml-auto'>{rupiah(harga)}</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default CheckoutItem;
