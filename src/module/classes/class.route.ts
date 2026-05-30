import express, { Router } from "express";
import { classController } from "./class.controller";

const router = Router();

router.get("/", classController.getclass);
router.get("/:id", classController.getclassById);
router.post("/", classController.createclass);
router.put("/:id", classController.updateclass);
router.delete("/:id", classController.deleteclass);

export const classRoute = router;