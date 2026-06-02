import { Router } from "express";
import { LibrayBooksController } from "./libray_books.controller";



const router = Router();

router.get("/libray-book", LibrayBooksController.getLibraryBooks);
router.post("/libray-book", LibrayBooksController.addLibraryBook);
router.patch("/libray-book/:id", LibrayBooksController.updateLibraryBook);
router.delete("/libray-book/:id", LibrayBooksController.deleteLibraryBook);

export default router;