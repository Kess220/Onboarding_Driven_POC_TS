import { Request, Response } from "express";
import TaskService from "../service/taskService";

export async function createTask(req: Request, res: Response) {
  try {
    const { title } = req.body;

    if (!title) {
      return res
        .status(400)
        .json({ error: "O título da tarefa é obrigatório." });
    }

    const newTask = await TaskService.createTask(title);
    return res.status(201).json(newTask);
  } catch (error) {
    console.error("Erro ao criar a tarefa:", error);
    return res.status(500).json({ error: "Erro ao criar a tarefa." });
  }
}

export async function getAllTasks(req: Request, res: Response) {
  try {
    const tasks = await TaskService.getAllTasks();
    return res.status(200).json(tasks);
  } catch (error) {
    console.error("Erro ao buscar tarefas:", error);
    return res.status(500).json({ error: "Erro ao buscar tarefas." });
  }
}
