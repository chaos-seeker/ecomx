import { ProductCard } from "@/components/product";

export default function Home() {
  return (
    <section>
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2 2xl:grid-cols-6 gap-4">
          <ProductCard
            title="Product 1"
            price={100}
            image="/images/product.webp"
          />
          <ProductCard
            title="Product 1"
            price={100}
            image="/images/product.webp"
          />
          <ProductCard
            title="Product 1"
            price={100}
            image="/images/product.webp"
          />
          <ProductCard
            title="Product 1"
            price={100}
            image="/images/product.webp"
          />
          <ProductCard
            title="Product 1"
            price={100}
            image="/images/product.webp"
          />
          <ProductCard
            title="Product 1"
            price={100}
            image="/images/product.webp"
          />
        </div>
      </div>
    </section>
  );
}
