import useMarketStore from '../../store/marketStore';
import Flex from './Flex';
import Card from './Card';
import { useState } from 'react';
import { rupiah } from '../../utils/toRupiah';
import Modal from '../../components/Modal';

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
		sendToModal,
	} = useMarketStore();

	let totalPrice = orderHistory.totalPrice;
	let servicePrice = (orderHistory.totalPrice * 6) / 100;
	let totalPriceAfterService = orderHistory.totalPrice + servicePrice;

	let newDate = orderHistory.date.toLocaleDateString('id', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	});
	let newTime = orderHistory.date.toLocaleTimeString('en-US');
	console.log(newDate);
	console.log(newTime);
	return (
		<>
			<div className='border-2 mb-[20px] px-[15px] pb-[20px] pt-[10px] rounded-lg'>
				<Flex className={'mb-[10px]'}>
					<p>
						{newDate} | <span className='font-light'> order ke - {index}</span>
					</p>
				</Flex>

				<div className='flex flex-col sm:flex-row items-center sm:items-start sm:justify-between gap-4 '>
					<div className='flex flex-col items-start flex-1'>
						{orderHistory.order.map((product, index) => {
							console.log(index + 1);
							if (index === 0)
								return (
									<Card
										key={index}
										product={product}
										otherProduct={orderHistory.order.length}
										orderHistory={orderHistory}
									/>
								);
						})}
					</div>
					<Flex className={'flex-col mr-[20px] justify-center items-center'}>
						<p>Total Belanja</p>
						<p className='font-medium mb-[10px]'>
							{rupiah(totalPriceAfterService)}
						</p>
						<button
							onClick={() => {
								sendToModal(orderHistory);
							}}
							className='font-medium text-red-500 mt-auto '
						>
							Lihat Detail Transaksi
						</button>
					</Flex>
				</div>
			</div>
		</>
	);
};

export default detail;
