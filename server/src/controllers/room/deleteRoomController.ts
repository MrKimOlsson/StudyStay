import { Request, Response } from "express";
import Room from "../../models/Room";

export async function deleteRoomController(req: Request, res: Response) {
  const roomId = req.params.roomId;
  const room = await Room.findByIdAndDelete(roomId);
  res.json(room);
}