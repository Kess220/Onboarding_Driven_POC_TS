import { Request, Response, NextFunction } from "express";

export function errorHandler(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.error("Erro no servidor:", err);

  if (err instanceof Error) {
    return res.status(500).json({ error: "Erro interno do servidor." });
  }

  return res.status(500).json({ error: "Erro interno do servidor." });
}
