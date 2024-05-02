import useMarketStore from '../../store/marketStore';
import { rupiah } from '../../utils/toRupiah';
const ProductItem = ({ product, otherProduct }) => {
	return (
		<>
			<div className={`flex flex-row`}>
				<img
					src={'/src/assets/images/' + product.image}
					alt={product.name}
					className='w-[80px] h-[80px] rounded-2xl'
				/>
				<div className='flex-end flex-col ml-4 w-full gap-2'>
					<p className='font-medium'>{product.name}</p>
					<div className='flex gap-1'>
						<p className='font-normal text-sm'>{product.quantity} x</p>
						<p className='font-normal text-sm'>{rupiah(product.price)}</p>
					</div>
					<button
						className='text-sm font-light self-start'
						// onClick={() => {
						// 	sendToModal(orderHistory);
						// }}
					>
						{otherProduct - 1 === 0
							? ''
							: `+${otherProduct - 1} produk lainnya`}
					</button>
				</div>
			</div>
		</>
	);
};

export default ProductItem;
