import { Request, Response } from "express";
import Room from "../../models/Room";

export async function createRoomController(req: Request, res: Response) {
  const newRoom = new Room({
    title: req.body.title,
    price: req.body.price,
    description: req.body.description,
    periond: req.body.period,
  });
  const createdRoom = await newRoom.save();
  res.json(createdRoom);
}