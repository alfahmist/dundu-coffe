import { Link } from 'react-router-dom';

import cart from '../assets/cart.svg';
import useMarketStore from '../store/marketStore';

const navigation = () => {
	const { getTotalItem } = useMarketStore();
	return (
		<>
			<div className='flex flex-row gap-10 justify-between bg-red-200 items-center px-[20px] py-[10px]'>
				<Link to={'/'}>Home</Link>
				<div className='flex flex-col justify-end items-start'>
					<Link to={'/cart'}>
						<img src={cart} alt='cart' className='inline cursport ' />(
						{getTotalItem()})
					</Link>
					<Link to={'/order-history'}>Order History</Link>
				</div>
			</div>
		</>
	);
};

export default navigation;
