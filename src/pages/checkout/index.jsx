import { Link } from 'react-router-dom';
import useMarketStore from '../../store/marketStore';
import Card from './card';
import { rupiah } from '../../utils/toRupiah';
import Container from '../../components/Container';
import CheckoutHeader from './CheckoutHeader';
import CheckoutBody from './CheckoutBody';
const index = () => {
	const { checkout, order } = useMarketStore();

	return (
		<>
			<Container>
				<div>
					<CheckoutHeader />
					<CheckoutBody />

					<hr className='mb-[15px]' />

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
				</div>
				<button
					onClick={() => {
						// menampilkan popup bayar
						order();
						let bayar = prompt('Input Bayar');
						let sisa = bayar - totalPriceAfterService;
						sisa > 0 ? alert('kembalian : ' + rupiah(sisa)) : null;
						sisa < 0 ? alert('kurang bayar') : null;
						if (sisa === 0 || sisa > 0) {
							setIsLoading(true);
							addToOrderHistory(bayar, sisa);
							setTimeout(() => {
								alert('Pembayaran Berhasil');
								navigate('/');
								setIsLoading(false);
							}, 1000);
						}
					}}
					className='cursor-pointer mb-[10px] flex justify-center px-[40px]  mx-auto bg-red-500 active:bg-red-600  w-11/12 max-w-[350px]   rounded-3xl text-white text-md h-full leading-[50px] font-bold shadow-slate-500 shadow-md'
				>
					<span>Bayar</span>
				</button>
			</Container>
		</>
	);
};

export default index;
