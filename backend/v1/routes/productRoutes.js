import express from "express";
import { createProduct, deleteProduct, getProducts, updateProduct } from "../controllers/productController.js";
import { adminCheck } from "../utils/userStatus.js";
import multer from "multer";


// const upload = multer({ dest: "uploads/" });
const router = express.Router();

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: function (req, file, cb) {
    const parts = file.originalname.split(".");
    const ext = parts[parts.length - 1];
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + uniqueSuffix + "." + ext);
  },
});

const upload = multer({ storage: storage });

router.route("/").post(upload.array("images"),adminCheck, createProduct).get(getProducts);

router
.route("/:id")
.put(adminCheck, updateProduct)
.delete(adminCheck, deleteProduct);


export default router;
