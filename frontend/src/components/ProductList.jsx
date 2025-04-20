import { useProductStore } from "../store/productStore"
import { useEffect } from "react";
const ProductList = () => {
    const {products, getProducts} = useProductStore();

    useEffect(() => {
        getProducts();
    }, [getProducts]);
  return (
    <div>
      <h1>Product List</h1>
      <div className="flex flex-wrap  space-x-2 gap-y-5 lg:gap-x-9 lg:gap-y-8 w-full max-w-7xl mx-auto">
        {products.map((product) => (
          <div
            key={product.id}
            className="cursor-pointer w-[9rem] md:w-[10.5rem] xl:w-[22%]"
          >
            <div className="min-w-[9rem] md:min-w-[10.5rem] xl:min-w-[11rem] h-[12rem] md:h-[13.5rem] lg:h-[13rem] xl:h-[15rem] bg-[#F5F5F5] rounded-md">
              <div>
                <img
                  src={product.image[0]}
                  alt="product image"
                  className="min-w-[9rem] md:min-w-[10.5rem] xl:min-w-[11rem] h-[12rem] md:h-[13.5rem] lg:h-[13rem] xl:h-[15rem] object-center"
                />
                <button className="relative bottom-8 bg-black text-white w-full py-3 rounded-b-md">
                  {" "}
                  Add to Cart
                </button>
              </div>
            </div>

            <div className="p-2 flex flex-col">
              <h2 className="flex-1 mb-2 text-base md:text-lg">
                {product.name}
              </h2>
              <p className="text-sm md:text-base text-red-400">
                ${product.price}
              </p>
            </div>
          </div>
          // <div key={product.id}>
          // <h2>{product.name}</h2>
          // <p>{product.price}</p>
          // </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList