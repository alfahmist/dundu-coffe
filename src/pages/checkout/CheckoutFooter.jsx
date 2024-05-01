import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import useMarketStore from '../../store/marketStore';
import { rupiah } from '../../utils/toRupiah';

const CheckoutFooter = () => {
	const {
		checkout,
		getCheckoutPrice,
		setIsLoading,
		isLoading,
		addToOrderHistory,
	} = useMarketStore();
	const navigate = useNavigate();
	let totalPrice = getCheckoutPrice();
	let servicePrice = (totalPrice * 6) / 100;
	let totalPriceAfterService = totalPrice + servicePrice;
	const [paymentSuccess, setPaymentSuccess] = useState(false);
	useEffect(() => {
		if (paymentSuccess) {
			navigate('/');
		}
		console.log(paymentSuccess);
	}, [paymentSuccess]);
	return (
		<button
			onClick={() => {
				// menampilkan popup bayar
				// order();
				let bayar = prompt('Input Bayar');
				let sisa = bayar - totalPriceAfterService;
				sisa > 0 ? alert('kembalian : ' + rupiah(sisa)) : null;
				sisa < 0 ? alert('kurang bayar') : null;
				if (sisa === 0 || sisa > 0) {
					setIsLoading(true);
					addToOrderHistory(bayar, sisa);
					alert('Pembayaran Berhasil');
					setIsLoading(false);
					setTimeout(() => {
						setPaymentSuccess(true);
					}, 1000);
				}
			}}
			className={`${
				isLoading && 'animate-pulse'
			} cursor-pointer mb-[10px] flex justify-center px-[40px] mx-auto bg-red-500 hover:bg-red-600 active:bg-red-700  w-11/12 max-w-[350px]   rounded-3xl text-white text-md h-full leading-[50px] font-bold shadow-slate-500 shadow-md`}
		>
			{isLoading ? <>Processing...</> : <>Bayar</>}
		</button>
	);
};

export default CheckoutFooter;
