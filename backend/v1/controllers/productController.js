import Product from "../models/productModel.js";
import asyncHandler from "express-async-handler";
import fs from "fs";

const getProducts = asyncHandler( async (req, res)=>{
    const products = Product.find();
    res.status(200).json(products);
});//get all products
const getProduct = asyncHandler( async (req, res)=>{
    const id = req.params.id;
    const product = await Product.findById(id);
    if(!product){
        res.status(404).json({message: "Product not found"});
    }else{
        res.status(200).json(product);
    }
});//get one product

/**
 * Admin Privillage needed below
 */

const createProduct = asyncHandler(async (req, res) => {
    console.log(req.files);
    const inputs = req.body;
    const product = {
      name: inputs.name,
      price: inputs.price,
      description: inputs.description,
      category: inputs.category,
      colors: inputs.colors,
      sizes: inputs.sizes,
      image:[]
    };  
    for (const [key, value] of Object.entries(inputs)) {
        if(key === "sizes") continue;
        if(value.length === 0){
            res.status(400).json({message: `${key} is required`});
            return;
        }
    }
    if (req.files === undefined || req.files.length == 0) {
      return res
        .status(400)
        .json({ message: "Please upload at least one image" });
    } 
    req.files.map((image)=>{
        product.image.push(req.protocol+"://"+req.get("host")+"/"+image.path);
    }) 
    // product.image = inputs.image;
   

  const newProduct = new Product(product)
  await newProduct.save();
  res.status(201).json({product: newProduct, message: "Product added successfully"});
});//create product

const updateProduct =asyncHandler( async (req, res)=>{
    const id = req.params.id;
    const product = await Product.findByIdAndUpdate(id, req.body, {new: true});
    if(!product){
        res.status(404).json({message: "Product not found"});
    }else{
        res.status(200).json(product);
    }
});//update product
const deleteProduct = asyncHandler(async (req, res)=>{
    const id = req.params.id;
    await Product.findByIdAndDelete(id);
    res.status(200).json({message: "Product deleted"});
});//delete product

export{
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
}