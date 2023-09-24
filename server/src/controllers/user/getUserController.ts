import { Request, Response } from "express";
import User from "../../models/User";

export async function getUserController(req: Request, res: Response) {
  const { userId } = req.params;
  const user = await User.findById(userId);
  res.json(user);
}