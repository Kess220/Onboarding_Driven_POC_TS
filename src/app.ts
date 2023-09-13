import express, { Express, Request, Response } from "express";
import indexRouter from "./routes/index.Routes";

const app: Express = express();
const port: number = 5000;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Hello, World!" });
});

app.use(indexRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
