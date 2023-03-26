const ProductCard = () => {
  return (
    <div className="border border-red-500 p-4 min-w-[10rem] max-w-[15rem] flex flex-col gap-4">
      <div className="w-24 m-auto">
        <img
          src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
          alt="bag"
          className="w-full"
        />
      </div>

      <h2 className="text-sm font-bold sm:text-md">
        Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
      </h2>
      <p className="text-xs sm:text-sm md:text-md">
        Your perfect pack for everyday use and walks in the forest. Stash your
        laptop (up to 15 inches) in the padded sleeve, your everyday
      </p>
      <span>Price: 109.95</span>
    </div>
  );
};

export default ProductCard;
