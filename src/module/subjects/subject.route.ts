import { Router } from "express";
import { SubjectController } from "./subject.controller";


const router = Router();

router.get("/subject", SubjectController.getsubjects);
router.get("/subject/:id", SubjectController.getsubjectById);
router.post("/subject", SubjectController.addsubject);
router.put("/subject/:id", SubjectController.updatesubject);
router.delete("/subject/:id", SubjectController.deletesubject);

export const Subjectroute = router;