import useMarketStore from '../../store/marketStore';
import { rupiah } from '../../utils/toRupiah';

const ProductBody = ({ product }) => {
	const { addToCart, notification } = useMarketStore();
	const onClick = () => {
		notification ? null : addToCart(product);
	};
	return (
		<>
			<div className='p-[20px] flex flex-col gap-[10px] h-full'>
				<div className='flex flex-col justify-between sm:flex-row'>
					<p className='text-sm font-medium uppercase'>{product.name}</p>
					<p className='text-xs font-medium'>{rupiah(product.price)}</p>
				</div>
				<div className='flex flex-col justify-between sm:flex-row mt-auto'>
					<p className='text-[10px]'>stock : {product.stock}</p>
					<p className='text-[10px] font-medium'>
						{product.stock !== 0 ? 'Stock Tersedia' : 'Stock Tidak Tersedia'}
					</p>
				</div>

				{product.stock !== 0 ? (
					<button
						onClick={onClick}
						className='ml-auto mt-auto text-xs font-medium border border-red-500 px-4 py-2 rounded-[15px] hover:bg-red-500 hover:text-white active:text-white active:bg-red-600'
					>
						+Keranjang
					</button>
				) : (
					<button className='ml-auto mt-auto text-xs font-medium border border-slate-200 bg-slate-200 px-4 py-2 rounded-[15px] cursor-default'>
						Stock Habis
					</button>
				)}
			</div>
		</>
	);
};

export default ProductBody;
