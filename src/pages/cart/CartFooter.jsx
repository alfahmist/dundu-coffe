import { Link } from 'react-router-dom';

import useMarketStore from '../../store/marketStore';
import { rupiah } from '../../utils/toRupiah';

const CartFooter = () => {
	const { getTotalPrice, checkoutCart } = useMarketStore();
	return (
		<>
			<div
				className={`fixed w-full h-[50px] cursor-default transition-all duration-500 bottom-[20px] mx-auto`}
			>
				<Link
					onClick={() => checkoutCart()}
					to={'/checkout'}
					className='cursor-pointer flex flex-row justify-between px-[40px]  mx-auto bg-red-500 active:bg-red-600 text-center w-11/12 max-w-[730px] rounded-3xl text-white text-md h-full leading-[50px] font-bold shadow-slate-500 shadow-md'
				>
					<span>Checkout</span>
					<span>{rupiah(getTotalPrice())}</span>
				</Link>

				{/* <div className='text-center w-[730px] bg-zinc-400 mx-auto rounded-3xl text-white text-md h-full leading-[50px] font-bold shadow-slate-500 shadow-md'>
					<span>Checkout</span>
				</div> */}
			</div>
		</>
	);
};

export default CartFooter;
