import { Router } from "express";
import { NoticesController } from "./notices.controller";

const router = Router();

router.get("/", NoticesController.getNotices);
router.post("/", NoticesController.addNotice);
router.patch("/:id", NoticesController.updateNotice);
router.delete("/:id", NoticesController.deleteNotice);

export default router;