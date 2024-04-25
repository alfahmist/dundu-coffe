const flex = ({ children, className }) => {
	return (
		<>
			<div className={`flex justify-between ${className}`}>{children}</div>
		</>
	);
};

export default flex;
