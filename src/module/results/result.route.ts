import { Router } from "express";
import { ResultController } from "./result.controller";



const router = Router();

router.get("/result", ResultController.getResults);
router.post("/result", ResultController.addResult);
router.patch("/result/:id", ResultController.updateResult);
router.delete("/result/:id", ResultController.deleteResult);

export default router;