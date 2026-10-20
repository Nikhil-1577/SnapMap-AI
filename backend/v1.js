import express from "express";
import healthRoute from "./routes/health.js";
import authRoute from "./routes/auth.js";
import photoRoute from "./routes/photo.js";


const router = express.Router();

router.use("/health", healthRoute);
router.use("/auth", authRoute);
router.use("/photos", photoRoute);


router.get("/", (req, res) => {
    res.send("SnapMap API v1");
});

export default router