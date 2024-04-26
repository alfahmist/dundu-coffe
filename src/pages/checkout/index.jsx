import { Link } from 'react-router-dom';
import useMarketStore from '../../store/marketStore';
import Card from './card';
import Flex from './flex';
import { rupiah } from '../../utils/toRupiah';

const index = () => {
	const {
		carts,
		checkout,
		setSelectedAll,
		deleteSelectedProduct,
		getSelectedItem,
		selectedAll,
		isSelectAll,
		getCheckoutPrice,
		getCheckoutTotalItem,
	} = useMarketStore();

	let totalPrice = getCheckoutPrice();
	let servicePrice = (getCheckoutPrice() * 6) / 100;
	let totalPriceAfterService = getCheckoutPrice() + servicePrice;

	return (
		<>
			<div>
				<div className='mb-[15px] flex justify-between'>
					<div className=''>Dundu's Coffe</div>
				</div>
				<hr className='mb-[15px]' />
				<div className='mb-[15px]'>
					<p className='font-bold'>
						{getCheckoutTotalItem() > 0
							? `${getCheckoutTotalItem()} items`
							: '1 item'}
					</p>
					<Flex>
						<p className='font-light'>Total Harga Produk</p>
						<p>{rupiah(totalPrice)}</p>
					</Flex>
					<Flex>
						<p className='font-light'>Subtotal</p>
						<p>{rupiah(totalPrice)}</p>
					</Flex>
					<Flex>
						<p className='font-light'>Service (6%)</p>
						<p>{rupiah(servicePrice)}</p>
					</Flex>
					<Flex className='mt-[20px]'>
						<p className='font-medium'>Total</p>
						<p>{rupiah(totalPriceAfterService)}</p>
					</Flex>
				</div>
				<hr className='mb-[15px]' />

				{checkout.length > 0 ? (
					<>
						<div className='flex flex-col items-start'>
							{checkout.map((product, index) => {
								return <Card key={index} product={product} />;
							})}
						</div>
					</>
				) : (
					<>
						<Link
							to={'/'}
							className='text-center font-medium text-2xl my-[20px] text-blue-500 block'
						>
							+Tambah barang
						</Link>
					</>
				)}
			</div>
			<hr className='mb-[15px]' />
			<Link
				to={'/payment'}
				className='cursor-pointer mb-[10px] flex justify-center px-[40px]  mx-auto bg-red-400 active:bg-red-500  w-11/12 max-w-[350px]   rounded-3xl text-white text-md h-full leading-[50px] font-bold shadow-slate-500 shadow-md'
			>
				<span>Order</span>
			</Link>
		</>
	);
};

export default index;
