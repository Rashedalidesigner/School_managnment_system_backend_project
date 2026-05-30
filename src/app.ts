import express, { type Request, type Response } from "express";
import { assignmentsRoute } from "./module/assignments/assignments.route";
import { classRoute } from "./module/classes/class.route";

const app = express();

app.get("/", (req: Request, res: Response) => {
    res.send("Hello, World!");
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/assignments", assignmentsRoute);
app.use("/api/class", classRoute);


export default app;