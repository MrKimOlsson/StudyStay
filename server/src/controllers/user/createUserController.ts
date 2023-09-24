import { Request, Response } from "express";
import User from "../../models/User";

export async function createUserController(req: Request, res: Response) {
  const newUser = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,

  });
  const createdUser = await newUser.save();
  res.json(createdUser);
}