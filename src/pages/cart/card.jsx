import CardColumn from '../../components/CardColumn';
import CardRow from '../../components/CardRow';
import useMarketStore from '../../store/marketStore';
import ButtonProduct from './ButtonProduct';
import { rupiah } from '../../utils/toRupiah';
const card = ({ product }) => {
	const { setSelected } = useMarketStore();

	let harga = product.price * product.quantity;
	return (
		<>
			<div className='my-[25px] flex flex-col sm:flex-row gap-[20px]'>
				<div className='flex gap-[10px]'>
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
					<div>
						<p className='font-medium uppercase'>{product.name}</p>
						<p className='font-medium text-sm mb-2'>{rupiah(harga)}</p>
						<p className='text-xs ml-auto'>stock sisa : {product.stock}</p>
					</div>
				</div>
				<ButtonProduct product={product} />
			</div>
			<hr />
		</>
	);
};

export default card;
