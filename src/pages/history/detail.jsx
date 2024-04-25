import useMarketStore from '../../store/marketStore';
import Flex from './flex';
import Card from './card';
import { useState } from 'react';

const detail = ({ index }) => {
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
		orderHistory,
	} = useMarketStore();
	const rupiah = (number) => {
		const options = {
			style: 'currency',
			currency: 'IDR',
		};
		return new Intl.NumberFormat('id-ID', options).format(number);
	};
	let totalPrice = getCheckoutPrice();
	let servicePrice = (getCheckoutPrice() * 6) / 100;
	let totalPriceAfterService = getCheckoutPrice() + servicePrice;
	const [active, setActive] = useState();
	console.log(index);
	return (
		<>
			<button
				className='mb-[15px] text-left'
				onClick={() => {
					setActive(!active);
				}}
			>
				see detail order - {index}
			</button>
			{active && (
				<div className=''>
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
					<hr className='mb-[15px]' />
				</div>
			)}
		</>
	);
};

export default detail;
