import { Link } from 'react-router-dom';

import useMarketStore from '../../store/marketStore';
import { rupiah } from '../../utils/toRupiah';

const CartFooter = () => {
	const {
		getTotalPrice,
		getTotalItem,
		checkoutCart,
		isCalculating,
		getSelectedItem,
	} = useMarketStore();
	console.log(getSelectedItem());
	const obj = [
		{
			id: 1,
			image: 'affogato.jpg',
			isSelected: true,
			name: 'affogato',
			price: 25000,
			quantity: 1,
			stock: 2,
		},
		{
			id: 1,
			image: 'affogato.jpg',
			isSelected: true,
			name: 'affogato',
			price: 25000,
			quantity: 1,
			stock: 2,
		},
	];
	return (
		<>
			<div
				className={`${
					isCalculating ? 'animate-pulse' : ''
				} fixed w-full h-[50px] cursor-default transition-all duration-500 bottom-[20px] mx-auto`}
			>
				{getTotalItem() !== 0 && (
					<Link
						onClick={() => checkoutCart(getSelectedItem())}
						to={'/checkout'}
						className='cursor-pointer flex flex-row justify-end gap-2 px-[40px] mx-auto bg-red-500 active:bg-red-600 text-center w-11/12 max-w-[730px] rounded-3xl text-white text-md h-full leading-[50px] font-bold shadow-slate-500 shadow-md'
					>
						<>
							<span>Beli({getTotalItem()})</span>
							<span>{rupiah(getTotalPrice())}</span>
						</>
					</Link>
				)}
			</div>
		</>
	);
};

export default CartFooter;
