import { Router } from "express";
import { TeacherController } from "./teacher.controller";


const router = Router();

router.get("/", TeacherController.getTeachers);
router.get("/:id", TeacherController.getTeacherById);
router.post("/", TeacherController.addTeacher);
router.put("/:id", TeacherController.updateTeacher);
router.delete("/:id", TeacherController.deleteTeacher);

export default router;