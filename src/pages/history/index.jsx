import { Link } from 'react-router-dom';
import useMarketStore from '../../store/marketStore';
import Card from './card';
import Flex from './flex';
import Detail from './detail';
import { useState } from 'react';
import Container from '../../components/Container';

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
			<Container>
				<div>
					<div className='mb-[15px] flex justify-between'>
						<div className=''>Dundu's Coffe</div>
					</div>
					<hr className='mb-[15px]' />
					<div className='flex flex-col '>
						{orderHistory.map((orderHistory, index) => {
							return (
								<Detail
									key={index}
									orderHistory={orderHistory}
									index={index + 1}
								/>
							);
						})}
					</div>
				</div>
			</Container>
		</>
	);
};

export default index;
