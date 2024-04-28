import { redirect, useNavigate } from 'react-router-dom';
import useMarketStore from '../../store/marketStore';
import Card from './card';
import Flex from './flex';
import { useEffect, useRef, useState } from 'react';
import { rupiah } from '../../utils/toRupiah';
import Container from '../../components/Container';

const index = () => {
	const {
		carts,
		checkout,
		setSelectedAll,
		deleteSelectedProduct,
		getSelectedItem,
		selectedAll,
		isSelectAll,
		getCheckoutPrice,
		getCheckoutTotalItem,
		pendingPayment,
		addToOrderHistory,
		isLoading,
		setIsLoading,
		getOrderPrice,
	} = useMarketStore();

	let totalPrice = getOrderPrice();
	let servicePrice = (getOrderPrice() * 6) / 100;
	let totalPriceAfterService = getOrderPrice() + servicePrice;
	const [active, setActive] = useState(false);
	const [height, setHeight] = useState();
	const navigate = useNavigate();
	const ref = useRef();

	useEffect(() => {
		active ? setHeight(ref.current.clientHeight) : setHeight('0');
		console.log(active);
		console.log(ref.current.clientHeight);
	});
	return (
		<>
			<Container>
				<div>
					<div className='mb-[15px] flex justify-between'>
						<div className=''>Dundu's Coffe</div>
					</div>
					<hr className='mb-[15px]' />
					<Flex className={'flex-col justify-center items-center mb-[15px]'}>
						<p>Total Tagihan</p>
						<p className='font-bold text-3xl'>
							{rupiah(totalPriceAfterService)}
						</p>
					</Flex>
					<hr className='mb-[15px]' />
					<div className='mb-[15px]'>
						<Flex>
							<p className='font-light'>Total Harga Produk</p>
							<p>{rupiah(totalPrice)}</p>
						</Flex>
						<Flex>
							<p className='font-light'>Subtotal</p>
							<p>{rupiah(totalPrice)}</p>
						</Flex>
						<Flex>
							<p className='font-light'>Service (6%)</p>
							<p>{rupiah(servicePrice)}</p>
						</Flex>
						<Flex className='mt-[20px]'>
							<p className='font-medium'>Total</p>
							<p>{rupiah(totalPriceAfterService)}</p>
						</Flex>
					</div>
					<hr className='mb-[15px]' />
					<button
						className='mb-[15px] w-full text-left'
						onClick={() => {
							setActive(!active);
						}}
					>
						see detail order
					</button>

					<div
						style={{ height: height }}
						className='flex flex-col items-start overflow-hidden transition-all duration-500 ease-in-out'
					>
						<div ref={ref}>
							{pendingPayment.map((product, index) => {
								return <Card key={index} product={product} />;
							})}
						</div>
					</div>
				</div>

				<hr className='mb-[15px]' />
				<button
					// to={'/'}
					onClick={() => {
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
