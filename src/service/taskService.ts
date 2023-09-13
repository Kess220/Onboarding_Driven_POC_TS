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
}

export default new TaskService();
