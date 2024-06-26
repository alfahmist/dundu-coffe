const Container = ({ children }) => {
	return (
		<>
			<div
				className={`max-w-[900px] mx-auto bg-white font-display border-2 p-[10px] mb-[100px]`}
			>
				{children}
			</div>
		</>
	);
};

export default Container;
