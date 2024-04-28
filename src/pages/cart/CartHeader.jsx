import { Link } from 'react-router-dom';

const CartHeader = () => {
	return (
		<>
			<div className='flex justify-between'>
				<div className='font-medium'>Dundu's Coffe</div>
				<Link to={'/'} className='text-blue-500'>
					+Tambah
				</Link>
			</div>
			<hr className='my-[15px]' />
		</>
	);
};

export default CartHeader;
