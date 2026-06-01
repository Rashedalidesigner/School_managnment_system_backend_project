import { Router } from "express";
import { StudentParentsController } from "./student_parent.controller";


const router = Router();

router.get("/", StudentParentsController.getStudentParents);
router.get("/:id", StudentParentsController.getStudentParentById);
router.post("/", StudentParentsController.addStudentParent);
router.put("/:id", StudentParentsController.updateStudentParent);
router.delete("/:id", StudentParentsController.deleteStudentParent);

export default router;