import { Request, Response } from "express";
import Room from "../../models/Room";

export async function getRoomController(req: Request, res: Response) {
  const { roomId } = req.params;
  const room = await Room.findById(roomId);
  res.json(room);
}