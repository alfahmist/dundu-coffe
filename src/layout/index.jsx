import { Link, Outlet, useLocation } from 'react-router-dom';

import Navigation from './navigation';
import useMarketStore from '../store/marketStore';
import { rupiah } from '../utils/toRupiah';
import Modal from '../components/Modal';

const index = () => {
	const { notification, notificationText, getTotalPrice, checkoutCart, modal } =
		useMarketStore();
	const path = useLocation().pathname;

	return (
		<>
			<Modal orderHistory={modal}></Modal>
			{modal.length !== 0 && (
				<div
					className={`${'opacity-60 bg-black'} fixed h-screen w-screen`}
				></div>
			)}
			<div
				className={`fixed w-full h-[30px] cursor-default transition-all duration-500  ${
					notification ? 'top-[100px] opacity-100' : 'top-[-100px] opacity-0'
				}`}
			>
				<div className='text-center w-[430px] bg-black opacity-80 mx-auto rounded-md text-white text-sm h-full leading-[30px]'>
					{notificationText}
				</div>
			</div>
			<div>
				<div className='max-w-[830px] mx-auto pb-[100px] bg-white'>
					{['/', '/order-history'].includes(path) ? <Navigation /> : null}
					<div className='px-[20px] py-[10px] border-2'>
						<Outlet />
					</div>
				</div>
				<div
					className={`fixed w-full h-[50px] cursor-default transition-all duration-500 bottom-[20px]`}
				>
					{['/cart'].includes(path) ? (
						<Link
							onClick={() => checkoutCart()}
							to={'/checkout'}
							className='cursor-pointer flex flex-row justify-between px-[40px]  mx-auto bg-red-500 active:bg-red-600 text-center w-11/12 max-w-[730px] rounded-3xl text-white text-md h-full leading-[50px] font-bold shadow-slate-500 shadow-md'
						>
							<span>Checkout</span>
							<span>{rupiah(getTotalPrice())}</span>
						</Link>
					) : null}

					{/* <div className='text-center w-[730px] bg-zinc-400 mx-auto rounded-3xl text-white text-md h-full leading-[50px] font-bold shadow-slate-500 shadow-md'>
					<span>Checkout</span>
				</div> */}
				</div>
			</div>
		</>
	);
};

export default index;
