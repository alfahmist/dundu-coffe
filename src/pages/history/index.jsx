import { Link } from 'react-router-dom';
import useMarketStore from '../../store/marketStore';
import Card from './card';
import Flex from './flex';
import Detail from './detail';
import { useState } from 'react';

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
	return (
		<>
			<div>
				<div className='mb-[15px] flex justify-between'>
					<div className=''>Dundu's Coffe</div>
				</div>
				<hr className='mb-[15px]' />
				<div className='flex flex-col '>
					{orderHistory.map((product, index) => {
						return <Detail key={index} index={index + 1} />;
					})}
				</div>
				<Link
					to={'/payment'}
					className='cursor-pointer mb-[10px] flex justify-center px-[40px]  mx-auto bg-red-400 active:bg-red-500  w-11/12 max-w-[350px]   rounded-3xl text-white text-md h-full leading-[50px] font-bold shadow-slate-500 shadow-md'
				>
					<span>Order</span>
				</Link>
			</div>
		</>
	);
};

export default index;
