import { Router } from "express";
import { RoutineController } from "./routine.controller";


const router = Router();

router.get("/routine", RoutineController.getRoutines);
router.post("/routine", RoutineController.addRoutine);
router.patch("/routine/:id", RoutineController.updateRoutine);
router.delete("/routine/:id", RoutineController.deleteRoutine);

export default router;