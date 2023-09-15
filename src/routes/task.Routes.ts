import express from "express";
import {
  createTask,
  getAllTasks,
  updateTask,
  deleteTask,
} from "../controller/taskController";
// import { validateTaskInput } from "../middleware/validationMiddleware";

const router = express.Router();

// Rota para criar uma tarefa
router.post("/tasks", createTask);

// Rota para buscar todas as tarefas
router.get("/tasks", getAllTasks);

// Rota para atualizar uma tarefa por ID
router.put("/tasks/:taskId", updateTask);

// Rota para excluir uma tarefa por ID
router.delete("/tasks/:taskId", deleteTask);

export default router;
