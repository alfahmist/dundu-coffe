import useMarketStore from '../../store/marketStore';

const index = () => {
	const { notificationText } = useMarketStore();
	return (
		<div
			className={`fixed w-full h-[30px] cursor-default animate-[wiggle_.6s] top-[100px] font-display`}
		>
			<div className='text-center w-[430px] bg-black opacity-80 mx-auto rounded-md text-white text-sm h-full leading-[30px]'>
				{notificationText}
			</div>
		</div>
	);
};

export default index;
