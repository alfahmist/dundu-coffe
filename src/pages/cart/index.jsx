import Container from '../../components/Container';
import CartBody from './CartBody';
import CartFooter from './CartFooter';
import CartHeader from './CartHeader';

const index = () => {
	return (
		<>
			<Container>
				<CartHeader />
				<CartBody />
			</Container>
			<CartFooter />
		</>
	);
};

export default index;
