import { Link, Outlet } from 'react-router-dom';
import cart from '../assets/cart.svg';
import useMarketStore from '../store/marketStore';
import { useRef } from 'react';

const index = () => {
	const { getTotalItem, notification } = useMarketStore();

	return (
		<>
			<div
				className={`fixed w-full h-[30px] cursor-default transition-all duration-500  ${
					notification ? 'top-[100px] opacity-100' : 'top-[0] opacity-0'
				}`}
			>
				<div className='text-center w-[430px] bg-black opacity-80 mx-auto rounded-md text-white text-sm h-full leading-[30px]'>
					1 item added to cart
				</div>
			</div>

			<div className='max-w-[830px] mx-auto '>
				<div className='flex flex-row gap-10 justify-between bg-red-200 items-center px-[20px] py-[10px]'>
					<Link to={'/'}>Home</Link>
					<div className='flex flex-col justify-end items-start'>
						<Link to={'/cart'}>
							<img width={20} src={cart} alt='cart' className='inline' />(
							{getTotalItem()})
						</Link>
						<Link to={'/order-history'}>Order History</Link>
					</div>
				</div>
				<div className='px-[20px] py-[10px] border-2'>
					<Outlet />
				</div>
			</div>
		</>
	);
};

export default index;
