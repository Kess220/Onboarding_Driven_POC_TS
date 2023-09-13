"use strict";
// src/controllers/taskController.ts
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const taskService_1 = __importDefault(require("../service/taskService"));
class TaskController {
    createTask(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { title } = req.body;
                const task = yield taskService_1.default.createTask(title);
                return res.status(201).json(task);
            }
            catch (error) {
                console.error("Erro ao criar a tarefa:", error);
                return res.status(500).json({ message: "Erro ao criar a tarefa." });
            }
        });
    }
}
exports.default = new TaskController();
