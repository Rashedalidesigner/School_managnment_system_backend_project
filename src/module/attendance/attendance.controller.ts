import type { Request, Response } from "express";
import { sendResponse } from "../../utility/SendResponse";
import { attendanceService } from "./attendance.service";

const getAttendance = async (req: Request, res: Response) => {
    try {
        const result = await attendanceService.getAttendanceFromDB();
        if (!result) {
            return sendResponse(res, true, 404, "No attendance records found");
        }
        return sendResponse(res, true, 200, "Attendance records fetched successfully", result);
    } catch (error) {
        return sendResponse(res, false, 500, "Failed to fetch attendance data");
    }
};

const getAttendanceById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const result = await attendanceService.getAttendanceByIdFromDB(Number(id));
        if (!result) {
            return sendResponse(res, true, 404, "Attendance record not found");
        }
        return sendResponse(res, true, 200, "Attendance record fetched successfully", result);
    } catch (error) {
        return sendResponse(res, false, 500, "Failed to fetch attendance data");
    }
};

const createAttendance = async (req: Request, res: Response) => {
    const attendanceData = req.body;
    try {
        const result = await attendanceService.createAttendanceFromDB(attendanceData);
        if (!result) {
            return sendResponse(res, true, 400, "Failed to create attendance record");
        }
        return sendResponse(res, true, 201, "Attendance record created successfully", result);
    } catch (error) {
        return sendResponse(res, false, 500, "Failed to create attendance record");
    }
};

const updateAttendance = async (req: Request, res: Response) => {
    const { id } = req.params;
    const attendanceData = req.body;
    try {
        const result = await attendanceService.updateAttendanceFromDB(Number(id), attendanceData);
        if (!result) {
            return sendResponse(res, true, 404, "Attendance record not found");
        }
        return sendResponse(res, true, 200, "Attendance record updated successfully", result);
    } catch (error) {
        return sendResponse(res, false, 500, "Failed to update attendance record");
    }
};

const deleteAttendance = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const result = await attendanceService.deleteAttendanceFromDB(Number(id));
        if (!result) {
            return sendResponse(res, true, 404, "Attendance record not found");
        }
        return sendResponse(res, true, 200, "Attendance record deleted successfully", result);
    } catch (error) {
        return sendResponse(res, false, 500, "Failed to delete attendance record");
    }
};

export const attendanceController = {
    getAttendance,
    getAttendanceById,
    createAttendance,
    updateAttendance,
    deleteAttendance
};
