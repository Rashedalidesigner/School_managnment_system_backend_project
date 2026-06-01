import { Router } from "express";
import { SubjectController } from "./subject.controller";


const router = Router();

router.get("/", SubjectController.getsubjects);
router.get("/:id", SubjectController.getsubjectById);
router.post("/", SubjectController.addsubject);
router.put("/:id", SubjectController.updatesubject);
router.delete("/:id", SubjectController.deletesubject);

export default router;