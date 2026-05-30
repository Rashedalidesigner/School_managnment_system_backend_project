import { pool } from "../../database";
import type { Student } from "./student.interface";

const getstudentsFromDb = async () => {
    try {
        const result = await pool.query("SELECT * FROM students");
        return result.rows;
    } catch (error) {
        console.error("Error fetching students:", error);
        throw error;
    }
};

const getstudentByIdFromDb = async (id: number) => {
    try {
        const result = await pool.query("SELECT * FROM students WHERE id = $1", [id]);
        return result.rows[0];
    } catch (error) {
        console.error(`Error fetching student with id ${id}:`, error);
        throw error;
    }
};

const createstudentInDb = async (student: Student) => {
    const { name, email, phone, date_of_birth, address, class_id, roll_number, admission_date, guardian_name } = student;
    try {
        const result = await pool.query(
            "INSERT INTO students (name, email, phone, date_of_birth, address, class_id, roll_number, admission_date, guardian_name) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *",
            [name, email, phone, date_of_birth, address, class_id, roll_number, admission_date, guardian_name]
        );
        return result.rows[0];
    } catch (error) {
        console.error("Error creating student:", error);
        throw error;
    }
};
const updatestudentInDb = async (id: number, student: Student) => {
    const { name, email, phone, date_of_birth, address, class_id, roll_number, admission_date, guardian_name } = student;
    try {
        const result = await pool.query(
            "UPDATE students SET name = $1, email = $2, phone = $3, date_of_birth = $4, address = $5, class_id = $6, roll_number = $7, admission_date = $8, guardian_name = $9 WHERE id = $10 RETURNING *",
            [name, email, phone, date_of_birth, address, class_id, roll_number, admission_date, guardian_name, id]
        );
        return result.rows[0];
    } catch (error) {
        console.error(`Error updating student with id ${id}:`, error);
        throw error;
    }
};

const deletestudentInDb = async (id: number) => {
    try {
        const result = await pool.query("DELETE FROM students WHERE id = $1 RETURNING *", [id]);
        return result.rows[0];
    } catch (error) {
        console.error(`Error deleting student with id ${id}:`, error);
        throw error;
    }
};

export const studentService = {
    getstudentsFromDb,
    getstudentByIdFromDb,
    createstudentInDb,
    updatestudentInDb,
    deletestudentInDb
};