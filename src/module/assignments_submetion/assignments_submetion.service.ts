import { pool } from "../../database";
import type { AssignmentSubmission } from "./assignments_submetin.interface";

const createAssignmentSubmission = async (assignments: AssignmentSubmission) => {
    const result = await pool.query(
        "INSERT INTO assignment_submissions (assignment_id, student_id, submission_file_link, submitted_at) VALUES ($1, $2, $3, $4) RETURNING *",
        [assignments.assignment_id, assignments.student_id, assignments.submission_file_link, assignments.submitted_at]
    );
    return result.rows[0];
};

const getAssignmentSubmission = async () => {
    const result = await pool.query("SELECT * FROM assignment_submissions");
    return result.rows;
};


const getAssignmentSubmissionsById = async (id: number) => {
    const result = await pool.query("SELECT * FROM assignment_submissions WHERE id = $1", [id]);
    return result.rows;
};

const getAssignmentSubmitionByStudentId = async (student_id: number) => {
    const result = await pool.query("SELECT * FROM assignment_submissions WHERE student_id = $1", [student_id]);
    return result.rows;
}

const getAssignmentSubmetionByAssignmentID = async (assignment_id: number) => {
    const result = await pool.query("SELECT * FROM assignment_submissions WHERE assignment_id = $1", [assignment_id]);
    return result.rows;
}

const updateAssignmentSubmissionInDb = async (id: number, updatedata: AssignmentSubmission) => {
    const result = await pool.query(
        "UPDATE assignment_submissions SET submission_file_link = $1, WHERE id = $2 RETURNING *",
        [updatedata.submission_file_link, id]
    );
    return result.rows[0];
};

const deleteAssignmentSubmissionFromDb = async (id: number) => {
    const result = await pool.query("DELETE FROM assignment_submissions WHERE id = $1 RETURNING *", [id]);
    return result.rows[0];
};




export const assignmentsSubmetionService = {
    createAssignmentSubmission,
    getAssignmentSubmission,
    getAssignmentSubmissionsById,
    getAssignmentSubmitionByStudentId,
    getAssignmentSubmetionByAssignmentID,
    updateAssignmentSubmissionInDb,
    deleteAssignmentSubmissionFromDb
};