import bin from '../../assets/bin.svg';
import useMarketStore from '../../store/marketStore';

const ProductEditor = ({ product }) => {
	const { addQuantity, substractQuantity, deleteProduct } = useMarketStore();
	const btnDelete = () => {
		confirm('delete') ? deleteProduct(product.id) : null;
	};
	const btnAdd = () => {
		addQuantity(product.id);
	};
	const btnSubstract = () => {
		substractQuantity(product.id);
	};
	return (
		<>
			<div className='flex items-center ml-auto'>
				<button onClick={btnDelete} className='mr-[20px]'>
					<img src={bin} alt='bin' />
				</button>

				{product.quantity > 1 ? (
					<button
						onClick={btnSubstract}
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
				{product.quantity < product.stock ? (
					<button
						onClick={btnAdd}
						className='text-2xl border border-red-400 rounded-full h-[30px] w-[30px] leading-[20px] hover:bg-red-400 active:bg-red-500 '
					>
						+
					</button>
				) : (
					<button className='text-2xl border border-slate-200 rounded-full h-[30px] w-[30px] leading-[20px] bg-slate-200 text-slate-500 cursor-default'>
						+
					</button>
				)}
			</div>
		</>
	);
};

export default ProductEditor;
