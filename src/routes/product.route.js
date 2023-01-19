import { Router } from "express";
import Product from "../model/product";

const router = Router();

//////////////////////////////////////////////////////// PRODUCTS //////////////////////////////////////////////////////////////

// Get all products
router.get("/", async (request, response) => {
  const productSample = await Product.find(request.query);

  response.json({
    products: productSample,
  });
});

// Search product by Admin
router.get("/search", async (req, res) => {
  const products = await Product.find({
    title: { $regex: req.query.q || "", $options: "i" }, // filter with regax is to find the keyword, options:"i" to set its case-insensetive (khong quan trong viet hoa hay thuong)
  });

  res.json({ products: products, limit: 10, skip: 0 });
});

// READ (Get) a product by Id
router.get("/:productId", async (req, res) => {
  const product = await Product.findById(req.params.productId);

  if (!product)
    return res.json({
      message: `Not Found Product with Id: '${req.params.productId}'`,
    });

  res.json(product);
});

// CREATE (Post) / add a new product
router.post("/add", async (req, res) => {
  const newProduct = await Product.create(req.body);
  res.json(newProduct);
});

// UPDATE (Put) a product by Id
router.put("/:productId", async (req, res) => {
  const updateProduct = await Product.findByIdAndUpdate(
    req.params.productId,
    req.body,
    { new: true }
  );

  res.json(updateProduct);
});

// DELETE (Delete a product)
router.delete("/:productId", async (req, res) => {
  const deletedProduct = await Product.findByIdAndDelete(req.params.productId); //A.findOneAndDelete(conditions)

  res.json(deletedProduct);
});

export default router;
