import { Router } from "express";
import { FeesService } from "./fees.service";
import { FeesController } from "./fees.controller";



const router = Router();

router.get("/", FeesController.getFees);
router.post("/", FeesController.addFees);
router.patch("/:id", FeesController.updateFees);
router.delete("/:id", FeesController.deleteFees);

export default router;