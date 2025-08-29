import FlashSalesProductCard from "../../components/flash-sales-product-card";
import { products } from "../../data/products";
const asideItems = [
  "Woman’s Fashion",
  "Men’s Fashion",
  "Electronics",
  "Home & Lifestyle",
  "Medicine",
  "Sports & Outdoor",
  "Baby’s & Toys",
  "Groceries & Pets",
  "Health & Beauty",
];
const Home = () => {
  return (

    <>
    <div className="flex px-[135px] pb-36">
      <aside className="pt-10 pr-4 flex flex-col gap-4 border-r border-r-zinc-200">
        {asideItems.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </aside>
      <div className="pt-10 pl-11 flex-1 h-[344px]">
        <img src="/Hero.png" alt="Hero" className="object-cover" />
      </div>
    </div>

<div className="flex flex-wrap gap-6 px-4">
  {products.map((product, index) => (
    <FlashSalesProductCard
      key={index}
      discount={product.discount}
      name={product.name}
      price={product.price}
      oldPrice={product.oldPrice}
      rating={product.rating}
    />
  ))}
</div>
    </>
  );
};

export default Home;
