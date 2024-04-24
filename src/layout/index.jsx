import { Link, Outlet } from 'react-router-dom';
import useMarketStore from '../store/marketStore';

const index = () => {
	const { getTotalItem, notification } = useMarketStore();
	return (
		<>
			{notification && (
				<div className='fixed w-full top-[50px] h-[30px] cursor-default'>
					<div className='text-center w-[830px] bg-black mx-auto rounded-md text-white text-sm h-full leading-[30px]'>
						1 item added to cart
					</div>
				</div>
			)}

			<div className='max-w-[830px] mx-auto '>
				<div className='flex flex-row gap-10 justify-between bg-red-200 items-center px-[20px] py-[10px]'>
					<Link to={'/'}>Home</Link>
					<div className='flex flex-col justify-end items-start'>
						<Link to={'/cart'}>Cart ({getTotalItem()})</Link>
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
