import { Router } from "express";

// import bulkAnalyticsRouter from './bulk-analytics.route';
import shopifyRouter from './shopify.route';
import productRouter from './product.route';

const router = Router();

router.get("/", async (req, res) => {
	res.status(200).send(`Api is working - ${process.env.DB_NAME} - ${process.env.DB_USER} - ${process.env.DB_PASSWORD} - ${process.env.DB_HOST}`);
});

// router.use("/bulk-analytics", bulkAnalyticsRouter);
router.use("/shopify-events", shopifyRouter);
// router.use("/product", productRouter)

export default router;