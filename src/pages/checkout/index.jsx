import { Link, useNavigate } from 'react-router-dom';
import useMarketStore from '../../store/marketStore';
import Card from './card';
import { rupiah } from '../../utils/toRupiah';
import Container from '../../components/Container';
import CheckoutHeader from './CheckoutHeader';
import CheckoutBody from './CheckoutBody';
import Flex from './Flex';
const index = () => {
	const {
		checkout,
		order,
		getCheckoutPrice,
		setIsLoading,
		isLoading,
		addToOrderHistory,
	} = useMarketStore();
	const navigate = useNavigate();
	let totalPrice = getCheckoutPrice();
	let servicePrice = (totalPrice * 6) / 100;
	let totalPriceAfterService = totalPrice + servicePrice;

	return (
		<>
			<Container>
				<div>
					<CheckoutHeader />
					<Flex className='mt-[20px]'>
						<p className='font-medium'>Rincian Belanja</p>
					</Flex>
					<hr className='my-[20px]' />
					{checkout.length > 0 ? (
						<>
							<div className='flex flex-col items-start'>
								{checkout.map((product, index) => {
									return <Card key={index} product={product} />;
								})}
							</div>
						</>
					) : (
						''
					)}
					<CheckoutBody />

					<hr className='mb-[15px]' />
				</div>
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
							setTimeout(() => {
								alert('Pembayaran Berhasil');
							}, 500);
							console.log(checkout);
							addToOrderHistory(bayar, sisa);
							setTimeout(() => {
								setIsLoading(false);
								navigate('/');
							}, 1000);
						}
					}}
					className={`${
						isLoading && 'animate-pulse'
					} cursor-pointer mb-[10px] flex justify-center px-[40px] mx-auto bg-red-500 hover:bg-red-600 active:bg-red-700  w-11/12 max-w-[350px]   rounded-3xl text-white text-md h-full leading-[50px] font-bold shadow-slate-500 shadow-md`}
				>
					{isLoading ? <>Processing...</> : <>Bayar</>}
				</button>
			</Container>
		</>
	);
};

export default index;
