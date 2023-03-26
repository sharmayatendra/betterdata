import ProductCard from "./ProductCard";
import Sidebar from "./Sidebar";

const Products = () => {
  return (
    <section className="flex flex-col items-center justify-center p-4 gap-8 sm:flex-row sm:items-stretch">
      <Sidebar />
      <main className="flex flex-wrap items-center justify-center gap-10">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <ProductCard />
        ))}
      </main>
    </section>
  );
};

export default Products;
