import { Request, Response } from "express";
import Cabin from "../../models/Cabin";

export async function deleteCabinController(req: Request, res: Response) {
  const cabinId = req.params.cabinId;
  const cabin = await Cabin.findByIdAndDelete(cabinId);
  res.json(cabin);
}