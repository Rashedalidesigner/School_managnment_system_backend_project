import { Router } from "express";
import { IssusBooksController } from "./issus_book.controller";

const router = Router();

router.get("/", IssusBooksController.getIssusBooks);
router.post("/", IssusBooksController.addIssusBooks);
router.patch("/:id", IssusBooksController.updateIssusBooks);
router.delete("/:id", IssusBooksController.deleteIssusBooks);

export default router;