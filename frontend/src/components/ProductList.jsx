import { useProductStore } from "../store/productStore"
import { useEffect } from "react";
import ProductCard from "./ProductCard";
const ProductList = () => {
    const {products, getProducts} = useProductStore();

    useEffect(() => {
        getProducts();
    }, [getProducts]);
  return( 
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
    {products.map((product) => (
      <ProductCard id={product.id} name={product.name} image={product.image[0]} price={product.price} />
    ))}

  </div>
)
}

export default ProductList