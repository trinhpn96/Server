import { Router } from "express";
import Admin from "../model/adminKeyAndPassword";

const router = Router();

//////////////////////////////////////////////////////// PRODUCTS //////////////////////////////////////////////////////////////

// Get all products
router.get("/", async (request, response) => {
  const administrator = await Admin.find(request.query);

  response.json({
    admin: administrator,
  });
});

// // READ (Get) a product by Id
router.get("/:productId", async (req, res) => {
  const administrator = await Admin.findById(req.params.productId);

  if (!administrator)
    return res.json({
      message: `Not Found Product with Id: '${req.params.productId}'`,
    });

  res.json(administrator);
});

// // CREATE (Post) / add a new product
router.post("/add", async (req, res) => {
  const newAdministrator = await Admin.create(req.body);
  res.json(newAdministrator);
});

// // UPDATE (Put) a product by Id
router.put("/:productId", async (req, res) => {
  const updateAdmin = await Admin.findByIdAndUpdate(
    req.params.productId,
    req.body,
    { new: true }
  );

  res.json(updateAdmin);
});

// // DELETE (Delete a product)
router.delete("/:adminId", async (req, res) => {
  const deletedAdmin = await Admin.findByIdAndDelete(req.params.productId); 
  res.json(deletedAdmin);
});

export default router;
