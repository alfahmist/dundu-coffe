const card = ({ product }) => {
	console.log(product);
	return (
		<>
			<div className='flex flex-col border-2 w-[250px] flex-wrap rounded-2xl overflow-hidden mb-4'>
				<img src={'/src/assets/images/' + product.image} alt={product.name} />
				<div className='flex flex-col p-4 h-[170px] '>
					<div className='flex flex-row items-center justify-between'>
						<p className='font-medium max-w-[100px] h-[50px] mb-2'>
							{product.name}
						</p>
						<p className='font-normal text-xs self-start mt-1'>
							stock : {product.stock}
						</p>
					</div>
					<div className='flex flex-row justify-between items-center'>
						<p className='font-normal text-sm'>Rp{product.price}</p>
						{product.stock !== 0 ? (
							<p className='font-medium text-xs '>Stock Tersedia</p>
						) : (
							<p className='font-medium text-xs '>Stock Tidak Tersedia</p>
						)}
					</div>

					{product.stock !== 0 ? (
						<button className='mt-auto text-xs font-medium border border-red-400 px-4 py-2 rounded-[15px] self-end hover:bg-red-400 hover:text-white active:bg-red-500'>
							+Keranjang
						</button>
					) : (
						<button className='mt-auto text-xs font-medium border border-slate-200 bg-slate-200 px-4 py-2 rounded-[15px] self-end cursor-default  '>
							Stock Habis
						</button>
					)}
				</div>
			</div>
		</>
	);
};

export default card;
