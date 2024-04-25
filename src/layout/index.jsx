import { Link, Outlet, useLocation } from 'react-router-dom';

import Navigation from './navigation';
import useMarketStore from '../store/marketStore';

const index = () => {
	const { notification, notificationText } = useMarketStore();
	const path = useLocation().pathname;

	return (
		<>
			<div
				className={`fixed w-full h-[30px] cursor-default transition-all duration-500  ${
					notification ? 'top-[100px] opacity-100' : 'top-[-100px] opacity-0'
				}`}
			>
				<div className='text-center w-[430px] bg-black opacity-80 mx-auto rounded-md text-white text-sm h-full leading-[30px]'>
					{notificationText}
				</div>
			</div>
			<div className='max-w-[830px] mx-auto pb-[100px] '>
				<Navigation />
				<div className='px-[20px] py-[10px] border-2'>
					<Outlet />
				</div>
			</div>
			<div
				className={`fixed w-full h-[50px] cursor-default transition-all duration-500 bottom-[20px]`}
			>
				{['/cart'].includes(path) ? (
					<div className='cursor-pointer flex flex-row justify-between px-[40px]  mx-auto bg-red-400 active:bg-red-500 text-center w-11/12 max-w-[730px]   rounded-3xl text-white text-md h-full leading-[50px] font-bold shadow-slate-500 shadow-md'>
						<span>Checkout</span>
						<span>Rp20.000</span>
					</div>
				) : null}

				{/* <div className='text-center w-[730px] bg-zinc-400 mx-auto rounded-3xl text-white text-md h-full leading-[50px] font-bold shadow-slate-500 shadow-md'>
					<span>Checkout</span>
				</div> */}
			</div>
		</>
	);
};

export default index;
