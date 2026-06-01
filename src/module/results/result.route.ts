import { Router } from "express";
import { ResultController } from "./result.controller";



const router = Router();

router.get("/", ResultController.getResults);
router.post("/", ResultController.addResult);
router.patch("/:id", ResultController.updateResult);
router.delete("/:id", ResultController.deleteResult);

export default router;