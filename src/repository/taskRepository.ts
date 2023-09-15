import pool from "../db/db";
import { format } from "date-fns";

class TaskRepository {
  async createTask(title: string) {
    try {
      // Obtenha a data e hora atual
      const currentDate = new Date();

      // Defina o formato desejado
      const dateFormat = "dd/MM/yyyy HH:mm:ss";

      // Formate a data e hora
      const formattedDate = format(currentDate, dateFormat);

      const queryResult = await pool.query(
        "INSERT INTO tasks (title, created_at) VALUES ($1, $2) RETURNING *",
        [title, formattedDate]
      );

      if (queryResult.rows.length === 0) {
        throw new Error("Erro ao criar a tarefa.");
      }

      // Formate a data e hora no resultado antes de retorná-lo
      const newTask = queryResult.rows[0];
      newTask.created_at = formattedDate;

      return newTask;
    } catch (error) {
      console.error("Erro ao criar a tarefa:", error);
      throw new Error("Erro ao criar a tarefa.");
    }
  }

  async getAllTasks() {
    try {
      const queryResult = await pool.query("SELECT * FROM tasks");
      const tasks = queryResult.rows;

      // Formatando a data e hora de cada tarefa no resultado
      tasks.forEach((task) => {
        task.created_at = format(task.created_at, "dd/MM/yyyy HH:mm:ss");
      });

      return tasks;
    } catch (error) {
      console.error("Erro ao buscar tarefas:", error);
      throw new Error("Erro ao buscar tarefas.");
    }
  }

  async getTaskById(taskId: number) {
    try {
      const queryResult = await pool.query(
        "SELECT * FROM tasks WHERE id = $1",
        [taskId]
      );

      if (queryResult.rows.length === 0) {
        return null; // Tarefa não encontrada
      }

      const task = queryResult.rows[0];
      task.created_at = format(task.created_at, "dd/MM/yyyy HH:mm:ss");

      return task;
    } catch (error) {
      console.error("Erro ao buscar tarefa por ID:", error);
      throw new Error("Erro ao buscar tarefa por ID.");
    }
  }

  async updateTask(taskId: number, title: string) {
    try {
      const existingTask = await this.getTaskById(taskId);

      if (!existingTask) {
        return null; // Tarefa não encontrada
      }

      const queryResult = await pool.query(
        "UPDATE tasks SET title = $1 WHERE id = $2 RETURNING *",
        [title, taskId]
      );

      if (queryResult.rows.length === 0) {
        throw new Error("Erro ao atualizar a tarefa.");
      }

      const updatedTask = queryResult.rows[0];
      updatedTask.created_at = format(
        updatedTask.created_at,
        "dd/MM/yyyy HH:mm:ss"
      );

      return updatedTask;
    } catch (error) {
      console.error("Erro ao atualizar a tarefa:", error);
      throw new Error("Erro ao atualizar a tarefa.");
    }
  }

  async deleteTask(taskId: number) {
    try {
      const existingTask = await this.getTaskById(taskId);

      if (!existingTask) {
        return null; // Tarefa não encontrada
      }

      await pool.query("DELETE FROM tasks WHERE id = $1", [taskId]);

      return existingTask; // Retorne a tarefa excluída
    } catch (error) {
      console.error("Erro ao excluir a tarefa:", error);
      throw new Error("Erro ao excluir a tarefa.");
    }
  }
}

export default new TaskRepository();
