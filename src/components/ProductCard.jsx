const ProductCard = ({ title, image, description, price }) => {
  return (
    <div
      className="shadow-sm rounded-md border border-gray-300 p-4 min-w-[10rem] max-w-[15rem] h-full flex flex-col gap-4"
      data-testid="product"
    >
      <div className="w-24 m-auto">
        <img src={image} alt="bag" className="w-full" />
      </div>

      <h2 className="text-sm font-bold sm:text-md">{title}</h2>
      <p className="text-xs text-gray-600 sm:text-sm md:text-md line-clamp-4">
        {description}
      </p>
      <span className="text-xl font-semibold">₹{price}</span>
    </div>
  );
};

export default ProductCard;
