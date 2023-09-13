import express from "express";
import { createTask, getAllTasks } from "../controller/taskController";
import { createTaskSchema } from "../validation/taskValidator";

const router = express.Router();

router.post("/tasks", createTask);
router.get("/tasks", getAllTasks);

export default router;
