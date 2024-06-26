import { Request, Response } from "express";
import User from "../../models/User";

export async function deleteUserController(req: Request, res: Response) {
  const userId = req.params.userId;
  const user = await User.findByIdAndDelete(userId);
  res.json(user);
}