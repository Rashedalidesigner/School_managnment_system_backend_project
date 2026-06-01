import { Router } from "express";
import { ParentController } from "./parent.controller";



const router = Router();

router.get("/", ParentController.getParent);
router.post("/", ParentController.addParent);
router.patch("/:id", ParentController.updateParent);
router.delete("/:id", ParentController.deleteParent);

export default router;