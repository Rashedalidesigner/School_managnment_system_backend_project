import express, { Router } from "express";
import { assignmentsController } from "./assignmets.controller";

const router = Router();

router.get("/", assignmentsController.getAssignments);
router.post("/", assignmentsController.createAssignment);
router.get("/:id", assignmentsController.getAssignmentById);
router.patch("/:id", assignmentsController.updateAssignment);
router.delete("/:id", assignmentsController.deleteAssignment);

export const assignmentsRoute = router;