import type { Request, Response } from "express";
import { classService } from "./class.service";
import { sendResponse } from "../../utility/SendResponse";

const getclass = async (req: Request, res: Response) => {
    const result = await classService.getclassintoDb();
    if (result.length === 0) {
        return sendResponse(res, false, 500, "No classes found");
    }
    sendResponse(res, true, 200, "Classes fetched successfully", result);
}

const getclassById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await classService.getclassByIdFromDb(Number(id));
    if (!result) {
        return sendResponse(res, false, 404, "Class not found");
    }
    sendResponse(res, true, 200, "Class fetched successfully", result);
};

const createclass = async (req: Request, res: Response) => {
    const result = await classService.createclassInDb(req.body);
    sendResponse(res, true, 201, "Class created successfully", result);
}

const updateclass = async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await classService.updateclassInDb(Number(id), req.body);
    if (!result) {
        return sendResponse(res, false, 404, "Class not found");
    }
    sendResponse(res, true, 200, "Class updated successfully", result);
}

const deleteclass = async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await classService.deleteclassInDb(Number(id));
    if (!result) {
        return sendResponse(res, false, 404, "Class not found");
    }
    sendResponse(res, true, 200, "Class deleted successfully", result);
}

export const classController = {
    getclass,
    getclassById,
    createclass,
    updateclass,
    deleteclass
}