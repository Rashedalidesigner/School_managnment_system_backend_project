import express, { Router } from "express";
import { studentController } from "./student.controller";

const router = Router();

router.get("/", studentController.getstudents);
router.get("/:id", studentController.getstudentById);
router.post("/", studentController.createstudent);
router.put("/:id", studentController.updatestudent);
router.delete("/:id", studentController.deletestudent);


export const studentRoute = router;