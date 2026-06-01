import { Router } from "express";
import { RoutineController } from "./routine.controller";


const router = Router();

router.get("/", RoutineController.getRoutines);
router.post("/", RoutineController.addRoutine);
router.patch("/:id", RoutineController.updateRoutine);
router.delete("/:id", RoutineController.deleteRoutine);

export default router;