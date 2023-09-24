import { Request, Response } from "express";
import Cabin from "../../models/Cabin";

export async function getCabinController(req: Request, res: Response) {
  const { cabinId } = req.params;
  const cabin = await Cabin.findById(cabinId);
  res.json(cabin);
}