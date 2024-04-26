export const Button = ({ children, onClick, disabled }) => {
	return (
		<button
			className={
				disabled
					? 'mt-auto text-xs font-medium border border-slate-200 bg-slate-200 px-4 py-2 rounded-[15px] self-end cursor-default  '
					: 'mt-auto text-xs font-medium border border-red-500 px-4 py-2 rounded-[15px] self-end hover:bg-red-500 hover:text-white active:text-white active:bg-red-600'
			}
			onClick={onClick}
		>
			{children}
		</button>
	);
};
