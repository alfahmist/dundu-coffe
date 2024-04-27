const CardRow = ({ children, stickBottom }) => {
	return (
		<div
			className={`flex flex-col justify-between sm:flex-row ${
				stickBottom ? 'mt-auto' : ''
			}`}
		>
			{children}
		</div>
	);
};

export default CardRow;
