import useMarketStore from '../../store/marketStore';
import HistoryItem from './HistoryItem';
import Container from '../../components/Container';

const index = () => {
	const { orderHistory } = useMarketStore();

	return (
		<>
			<Container>
				<div>
					<div className='mb-[15px] flex justify-between'>
						<div className=''>Dundu's Coffe</div>
					</div>
					<hr className='mb-[15px]' />
					<div className='flex flex-col '>
						{orderHistory.map((orderHistory, index) => {
							return (
								<HistoryItem
									key={index}
									orderHistory={orderHistory}
									index={index + 1}
								/>
							);
						})}
					</div>
				</div>
			</Container>
		</>
	);
};

export default index;
