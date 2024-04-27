const flex = ({ children, className }) => {
	return (
		<>
			<div className={`flex justify-between ${className ? className : ''}`}>
				{children}
			</div>
		</>
	);
};

export default flex;
