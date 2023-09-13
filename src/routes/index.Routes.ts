import { Router } from "express";
import taskRouter from "./task.Routes";

const indexRouter = Router();

indexRouter.use(taskRouter);

export default indexRouter;
