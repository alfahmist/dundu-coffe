import useMarketStore from '../../store/marketStore';
import Flex from './flex';
import Card from './card';
import { useState } from 'react';

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

	let year = orderHistory.date.getFullYear();
	let month = orderHistory.date.toLocaleString('default', { month: 'long' });
	let day = orderHistory.date.getDate();
	let hour = orderHistory.date.getHours();
	let minute = orderHistory.date.getMinutes();

	let newDate = `${day} ${month} ${year}`;
	let newTime = `${hour}:${minute}`;
	const [active, setActive] = useState(true);
	console.log(month);
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
							<Flex className='mt-[5px]'>
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