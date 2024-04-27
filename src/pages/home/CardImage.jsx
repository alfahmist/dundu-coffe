const CardImage = ({ alt, src }) => {
	return <img src={'/src/assets/images/' + src} alt={alt} />;
};

export default CardImage;