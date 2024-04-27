const CardRow = ({ children, className }) => {
	return (
		<div
			className={`flex   
			sm:flex-col ${className ? className : ''}`}
		>
			{children}
		</div>
	);
};

export default CardRow;
