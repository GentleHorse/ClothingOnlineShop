import { DUMMY_PRODUCTS } from "../dummy-products.js";
import Product from "./Product.jsx";

export default function Shop() {
  return (
    <section className="w-[70%] my-8 mx-auto">
      <h2 className="text-2xl uppercase mb-2 text-amber-100">
        Elegant Clothing For Everyone
      </h2>

      <ul className="list-none m-0 p-0 grid grid-cols-auto-fit-20rem gap-8">
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Product {...product} />
          </li>
        ))}
      </ul>
    </section>
  );
}
