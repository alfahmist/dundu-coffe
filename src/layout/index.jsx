import { Link, Outlet } from 'react-router-dom';

const index = () => {
	return (
		<>
			<div className='max-w-[830px] mx-auto '>
				<div className='flex flex-row gap-10 justify-between bg-red-200 items-center px-[20px] py-[10px]'>
					<Link to={'/'}>Home</Link>
					<div className='flex flex-col justify-end items-start'>
						<Link to={'/cart'}>Cart (2)</Link>
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
