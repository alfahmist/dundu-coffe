import useMarketStore from '../../store/marketStore';
import { rupiah } from '../../utils/toRupiah';
import Button from '../../components/Button';
import Flex from './Flex';

const ProductContent = ({ product }) => {
	const { addToCart, notification } = useMarketStore();
	const btnKeranjang = () => {
		notification ? null : addToCart(product);
	};
	return (
		<>
			<div className='p-[20px] flex flex-col gap-[10px] h-full'>
				<Flex between>
					<p className='text-sm font-medium uppercase'>{product.name}</p>
					<p className='text-xs font-medium'>{rupiah(product.price)}</p>
				</Flex>
				<Flex between stickBottom>
					<p className='text-[10px]'>stock : {product.stock}</p>
					<p className='text-[10px] font-medium'>
						{product.stock !== 0 ? 'Stock Tersedia' : 'Stock Tidak Tersedia'}
					</p>
				</Flex>

				{product.stock !== 0 ? (
					<Button active onClick={btnKeranjang}>
						+Keranjang
					</Button>
				) : (
					<Button>Stock Habis</Button>
				)}
			</div>
		</>
	);
};

export default ProductContent;
