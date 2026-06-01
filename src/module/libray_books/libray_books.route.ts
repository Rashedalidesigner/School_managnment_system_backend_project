import { Router } from "express";
import { LibrayBooksController } from "./libray_books.controller";



const router = Router();

router.get("/", LibrayBooksController.getLibraryBooks);
router.post("/", LibrayBooksController.addLibraryBook);
router.patch("/:id", LibrayBooksController.updateLibraryBook);
router.delete("/:id", LibrayBooksController.deleteLibraryBook);

export default router;