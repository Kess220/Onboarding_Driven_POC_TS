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
}

export default new TaskRepository();
