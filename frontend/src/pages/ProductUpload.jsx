import { useState } from "react";
import { useProductStore } from "../store/productStore";
import { toast } from "react-toastify";


const ProductUpload = () => {
    // const [image, setImage] = useState;
    const {addProduct, error} = useProductStore();
    const initialVal = {
      name: "",
      price: "",
      description: "",
      files: [],
      sizes:"",
      colors:"",
      category: ""
    }
    const [uploadData, setUploadData] = useState(initialVal);
    const handleImageChange = (e)=>
    {
      const images = e.target.files;
      const files = Object.values(images);
      setUploadData({...uploadData, files});
    }
    const handleSubmit = async (e)=>{
      e.preventDefault();
      if (typeof uploadData.colors === "string" && uploadData.colors !== "" ) {
        const colors = uploadData.colors.split(",");
        uploadData.colors = colors;
      }
      // if (uploadData.colors === "") {
      //   uploadData.colors 
      // }

      if(typeof uploadData.sizes === "string")
        {
          const sizes = uploadData.sizes.split(",");
          uploadData.sizes = sizes
        }
      try {
        const formData = new FormData();
        uploadData.files.forEach((file) => {
          formData.append("images", file);
        });
        for (const [name, value] of Object.entries(uploadData)) {
          formData.append(name, value)
        }
        // formData.append("name", uploadData.name);
        // formData.append("price", uploadData.price);
        // formData.append("description", uploadData.description);
        // formData.append("sizes", uploadData.sizes);
        // formData.append("colors", uploadData.colors);
        // formData.append("category", uploadData.category);
        const { product, message } = await addProduct(formData);
        console.log(product, message);
        toast.success(message);
      } catch(err) {
        toast.error(err)
      }
    }

    
  return (
    <>
      <div className="grid gap-25 grid-flow-row-dense grid-cols-12 items-center mt-14">
        <div className="bg-[#CBE4E8] col-span-6 pt-29 pl-28 rounded-r-sm h-155">
          {/* <img className="w-119" src={authImage} alt="auth-image" /> */}
        </div>
        <div className="col-span-5">
          <h1 className="text-4xl mb-2.5">Upload Product</h1>
          <p className="text-neutral-500">Enter your details below</p>
          <form onSubmit={handleSubmit}>
            <div>
              <input
                className="w-full border-b-1 focus:outline-0 placeholder:text-neutral-400  mt-8 pt-2 border-neutral-400"
                type="file"
                multiple
                // value={name}
                onChange={handleImageChange}
              />
            </div>
            <div>
              <input
                className="w-full border-b-1 focus:outline-0 placeholder:text-neutral-400  mt-8 pt-2 border-neutral-400"
                type="text"
                placeholder="Name"
                value={uploadData.name}
                onChange={(e) =>
                  setUploadData({ ...uploadData, name: e.target.value })
                }
              />
            </div>

            <div>
              <input
                className="w-full border-b-1 focus:outline-0 placeholder:text-neutral-400  mt-8 pt-2 border-neutral-400"
                type="text"
                placeholder="Price"
                value={uploadData.price}
                onChange={(e) =>
                  setUploadData({ ...uploadData, price: e.target.value })
                }
              />
            </div>
            <div>
              <input
                className="w-full border-b-1 focus:outline-0 placeholder:text-neutral-400  mt-8 pt-2 border-neutral-400"
                type="text"
                placeholder="Category"
                value={uploadData.category}
                onChange={(e) =>
                  setUploadData({ ...uploadData, category: e.target.value })
                }
              />
            </div>
            <div>
              <input
                className="w-full border-b-1 focus:outline-0 placeholder:text-neutral-400  mt-8 pt-2 border-neutral-400"
                type="text"
                placeholder="Colors Eg:- red, green, blue"
                value={uploadData.colors}
                onChange={(e) =>
                  setUploadData({ ...uploadData, colors: e.target.value })
                }
              />
            </div>
            <div>
              <input
                className="w-full border-b-1 focus:outline-0 placeholder:text-neutral-400  mt-8 pt-2 border-neutral-400"
                type="text"
                placeholder="Sizes Eg 34, 43, 23 -- Optional"
                value={uploadData.sizes}
                onChange={(e) =>
                  setUploadData({ ...uploadData, sizes: e.target.value })
                }
              />
            </div>
            <div>
              <textarea
                className="w-full border-b-1 focus:outline-0 placeholder:text-neutral-400 placeholder:italic mt-8 pt-2 border-neutral-400"
                type="text"
                placeholder="Product description"
                value={uploadData.description}
                onChange={(e) =>
                  setUploadData({ ...uploadData, description: e.target.value })
                }
              ></textarea>
            </div>

            <div className="mt-9">
              <button className="text-center w-full bg-[#EA4335] text-white rounded-sm py-3 cursor-pointer">
                Upload Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ProductUpload