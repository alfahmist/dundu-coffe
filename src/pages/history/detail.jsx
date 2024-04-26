import useMarketStore from '../../store/marketStore';
import Flex from './flex';
import Card from './card';
import { useState } from 'react';
import { rupiah } from '../../utils/toRupiah';

const detail = ({ orderHistory, index }) => {
	console.log(orderHistory);
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

	let totalPrice = orderHistory.totalPrice;
	let servicePrice = (orderHistory.totalPrice * 6) / 100;
	let totalPriceAfterService = orderHistory.totalPrice + servicePrice;

	let newDate = orderHistory.date.toLocaleDateString('default', {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	});
	let newTime = orderHistory.date.toLocaleTimeString('en-US');
	const [active, setActive] = useState(false);
	console.log(newDate);
	console.log(newTime);
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
				<div>
					<hr className='mb-[15px]' />
					<div className='flex flex-row justify-between gap-20'>
						<div className='flex flex-col items-start flex-1'>
							{orderHistory.order.map((product, index) => {
								return <Card key={index} product={product} />;
							})}
						</div>
						<div className='mb-[15px] flex-1'>
							<p className='font-bold'>
								{orderHistory.totalItem > 0
									? `${orderHistory.totalItem} items`
									: `${orderHistory.totalItem} item`}
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
							<Flex>
								<p className='font-medium'>Total</p>
								<p>{rupiah(totalPriceAfterService)}</p>
							</Flex>
							<Flex className={'mt-[20px]'}>
								<p className='font-medium'>Tunai</p>
								<p>{rupiah(orderHistory.tunai)}</p>
							</Flex>
							<Flex>
								<p className='font-medium'>Kembalian</p>
								<p>{rupiah(orderHistory.kembalian)}</p>
							</Flex>
							<Flex className='mt-[20px]'>
								<p className='font-medium'>Tanggal Pembelian</p>
								<p>{newDate}</p>
							</Flex>
							<Flex className='mt-[5px]'>
								<p className='font-medium'>Waktu Pembelian</p>
								<p>{newTime}</p>
							</Flex>
						</div>
					</div>
					<hr className='mb-[15px]' />
				</div>
			)}
		</>
	);
};

export default detail;
