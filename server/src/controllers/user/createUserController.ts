import { Request, Response } from "express";
import User from "../../models/User";

export async function createUserController(req: Request, res: Response) {
  const newUser = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    // _id: req.body._id,

  });
  const createdUser = await newUser.save();
  res.json(createdUser);
}