import { Router } from "express";
import { ParentController } from "./parent.controller";



const router = Router();

router.get("/parent", ParentController.getParent);
router.post("/parent", ParentController.addParent);
router.patch("/parent/:id", ParentController.updateParent);
router.delete("/parent/:id", ParentController.deleteParent);

export default router;