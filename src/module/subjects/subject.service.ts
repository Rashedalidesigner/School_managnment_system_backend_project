import { pool } from "../../database";

const getsubjectFromDb = async () => {
    try {
        const result = await pool.query("SELECT * FROM subjects");
        return result.rows;
    } catch (error: any) {
        return error.message;
    }
}

const getsubjectByIdFromDb = async (id: number) => {
    try {
        const result = await pool.query("SELECT * FROM subjects WHERE id = $1", [id]);
        return result.rows[0];
    } catch (error: any) {
        return error.message;
    }
}

const addsubjectToDb = async (subject: any) => {
    try {
        const result = await pool.query("INSERT INTO subjects (class_id, subject_name) VALUES ($1, $2) RETURNING *", [subject.class_id, subject.subject_name]);
        return result.rows[0];
    } catch (error: any) {
        return error.message;
    }
}

const updatesubjectInDb = async (id: number, subject: any) => {
    try {
        const result = await pool.query("UPDATE subjects SET class_id = $1, subject_name = $2 WHERE id = $3 RETURNING *", [subject.class_id, subject.subject_name, id]);
        return result.rows[0];
    } catch (error: any) {
        return error.message;
    }
}

const deletesubjectFromDb = async (id: number) => {
    try {
        const result = await pool.query("DELETE FROM subjects WHERE id = $1 RETURNING *", [id]);
        return result.rows[0];
    } catch (error: any) {
        return error.message;
    }
}

export const SubjectService = {
    getsubjectFromDb,
    getsubjectByIdFromDb,
    addsubjectToDb,
    updatesubjectInDb,
    deletesubjectFromDb
}