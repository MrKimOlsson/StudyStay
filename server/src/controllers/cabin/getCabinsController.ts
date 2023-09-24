import { Request, Response } from "express";
import Cabin from "../../models/Cabin";

export async function getCabinsController(req: Request, res: Response) {
  const cabins = await Cabin.find();
  res.json(cabins);
}