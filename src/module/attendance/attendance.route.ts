import { Router } from "express";
import { attendanceController } from "./attendance.controller";

const router = Router();

router.get("/attendance", attendanceController.getAttendance);
router.get("/attendance/:id", attendanceController.getAttendanceById);
router.post("/attendance", attendanceController.createAttendance);
router.put("/attendance/:id", attendanceController.updateAttendance);
router.delete("/attendance/:id", attendanceController.deleteAttendance);


export const attendanceRoute = router;