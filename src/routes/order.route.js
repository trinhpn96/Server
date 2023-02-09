import { Router } from "express";
import Order from "../model/orders";

const router = Router();

//////////////////////////////////////////////////////// PRODUCTS //////////////////////////////////////////////////////////////

// Get all products
router.get("/", async (request, response) => {
    const orders = await Order.find(request.query).populate('rooms');

    response.json({
        orders: orders,
    });
});

// CREATE (Post) / add a new product
router.post("/add", async (req, res) => {
    const newOrders = await Order.create(req.body);
    res.json(newOrders);
});

// DELETE (Delete a product)
router.delete("/:orderId", async (req, res) => {
    const order = await Order.findByIdAndDelete(req.params.orderId); //A.findOneAndDelete(conditions)

    res.json(order);
});

export default router;
