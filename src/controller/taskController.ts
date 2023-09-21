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
//oi

export async function getAllTasks(req: Request, res: Response) {
  try {
    const tasks = await TaskService.getAllTasks();
    return res.status(200).json(tasks);
  } catch (error) {
    console.error("Erro ao buscar tarefas:", error);
    return res.status(500).json({ error: "Erro ao buscar tarefas." });
  }
}

export async function updateTask(req: Request, res: Response) {
  try {
    const { taskId } = req.params;
    const { title } = req.body;

    if (!title || title.trim() === "") {
      return res
        .status(400)
        .json({ error: "O título da tarefa é obrigatório." });
    }

    // Chame o método do serviço para atualizar a tarefa
    const updatedTask = await TaskService.updateTask(Number(taskId), title);

    if (!updatedTask) {
      return res.status(404).json({ error: "Tarefa não encontrada." });
    }

    return res.status(200).json(updatedTask);
  } catch (error) {
    console.error("Erro ao atualizar a tarefa:", error);
    return res.status(500).json({ error: "Erro ao atualizar a tarefa." });
  }
}

export async function deleteTask(req: Request, res: Response) {
  try {
    const { taskId } = req.params;

    // Chame o método do serviço para excluir a tarefa
    const deletedTask = await TaskService.deleteTask(Number(taskId));

    if (!deletedTask) {
      return res.status(404).json({ error: "Tarefa não encontrada." });
    }

    return res.status(204).send(); // Resposta bem-sucedida sem conteúdo
  } catch (error) {
    console.error("Erro ao excluir a tarefa:", error);
    return res.status(500).json({ error: "Erro ao excluir a tarefa." });
  }
}
