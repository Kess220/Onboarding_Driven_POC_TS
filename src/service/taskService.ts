import TaskRepository from "../repository/taskRepository";

class TaskService {
  async createTask(title: string) {
    try {
      // Chame o método do repositório para criar a tarefa
      const newTask = await TaskRepository.createTask(title);
      return newTask;
    } catch (error) {
      // Lide com erros aqui, por exemplo, lançando ou registrando-os
      throw new Error("Erro ao criar a tarefa: " + error);
    }
  }

  async getAllTasks() {
    try {
      // Chame o método do repositório para buscar todas as tarefas
      const tasks = await TaskRepository.getAllTasks();
      return tasks;
    } catch (error) {
      // Lide com erros aqui, por exemplo, lançando ou registrando-os
      throw new Error("Erro ao buscar tarefas: " + error);
    }
  }

  async updateTask(taskId: number, title: string) {
    try {
      // Verifique se a tarefa com o ID especificado existe
      const existingTask = await TaskRepository.getTaskById(taskId);

      if (!existingTask) {
        return null; // Tarefa não encontrada
      }

      // Atualize a tarefa com o novo título
      const updatedTask = await TaskRepository.updateTask(taskId, title);

      return updatedTask;
    } catch (error) {
      throw error;
    }
  }

  async deleteTask(taskId: number) {
    try {
      // Verifique se a tarefa com o ID especificado existe
      const existingTask = await TaskRepository.getTaskById(taskId);

      if (!existingTask) {
        return null; // Tarefa não encontrada
      }

      // Exclua a tarefa
      await TaskRepository.deleteTask(taskId);

      return existingTask;
    } catch (error) {
      throw error;
    }
  }
}

export default new TaskService();
