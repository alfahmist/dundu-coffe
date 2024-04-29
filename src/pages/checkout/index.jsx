import Container from '../../components/Container';
import CheckoutHeader from './CheckoutHeader';
import CheckoutBody from './CheckoutBody';
import CheckoutFooter from './CheckoutFooter';
const index = () => {
	return (
		<>
			<Container>
				<div>
					<CheckoutHeader />
					<hr className='my-[15px]' />
					<CheckoutBody />
					<hr className='my-[15px]' />
				</div>
				<CheckoutFooter />
			</Container>
		</>
	);
};

export default index;
