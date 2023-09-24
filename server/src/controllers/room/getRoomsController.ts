import { Request, Response } from "express";
import Room from "../../models/Room";

export async function getRoomsController(req: Request, res: Response) {
  const rooms = await Room.find();
  res.json(rooms);
}