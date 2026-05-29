export const sendResponse = (res: any, status: string, statusCode: number, message: string, data?: any, error?: any) => {
    res.status(statusCode).json({
        status,
        message,
        data: data || null,
        error: error || null
    });
};