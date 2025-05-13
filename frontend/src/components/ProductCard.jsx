
const ProductCard = ({id, image, name, price}) => {
  return (
    <div className="relative bg-white  overflow-hidden" key={id}>
      <div className="relative w-full h-60 rounded-md bg-[#F5F5F5] shadow-md">
        <div className="w-7/12  pt-11 pb-11 m-auto">
          <img src={image} alt={name} className="" />
        </div>
        <div className="absolute top-2 right-2 flex space-x-2">
          <button className="bg-white bg-opacity-75 rounded-full p-2 text-gray-500 cursor-pointer"></button>
          <button className="bg-gray-100 bg-opacity-75 rounded-full p-2 text-gray-500 cursor-pointer"></button>
        </div>
        {/* <span className="absolute top-2 left-2 bg-green-500 text-white rounded-full text-xs font-bold py-1 px-2">
          New
        </span>{" "} */}
        <button className="relative bottom-9 bg-black text-white w-full py-2 rounded-b-md cursor-pointer">
          Add to Cart
        </button>
      </div>

      <div className="p-4 pl-0">
        <h3 className="text-lg">{name}</h3>
        <div className="mt-2 flex">
          <span className="text-sm text-red-400">${price}</span>
          <div className="flex items-center ml-4">
            <svg
              className="w-4 h-4 text-yellow-400 fill-current"
              viewBox="..."
            ></svg>
            <svg
              className="w-4 h-4 text-yellow-400 fill-current"
              viewBox="..."
            ></svg>
            <svg
              className="w-4 h-4 text-yellow-400 fill-current"
              viewBox="..."
            ></svg>
            <svg
              className="w-4 h-4 text-yellow-400 fill-current"
              viewBox="..."
            ></svg>
            <svg
              className="w-4 h-4 text-yellow-400 fill-current"
              viewBox="..."
            ></svg>
            <span className="text-gray-500 text-sm">(35)</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard