const CardRow = ({ children, className }) => {
	return (
		<div
			className={`flex   
			sm:flex-row ${className ? className : ''}`}
		>
			{children}
		</div>
	);
};

export default CardRow;
