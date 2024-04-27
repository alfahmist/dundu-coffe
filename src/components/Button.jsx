const Button = ({ children, active, onClick }) => {
	return (
		<>
			{active ? (
				<button
					onClick={onClick}
					className='ml-auto mt-auto text-xs font-medium border border-red-500 px-4 py-2 rounded-[15px] hover:bg-red-500 hover:text-white active:text-white active:bg-red-600'
				>
					{children}
				</button>
			) : (
				<button
					onClick={onClick}
					className='ml-auto mt-auto text-xs font-medium border border-slate-200 bg-slate-200 px-4 py-2 rounded-[15px] cursor-default'
				>
					{children}
				</button>
			)}
		</>
	);
};

export default Button;
