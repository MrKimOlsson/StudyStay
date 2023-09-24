import { Request, Response } from "express";
import House from "../../models/House";

export async function getHousesController(req: Request, res: Response) {
  const houses = await House.find();
  res.json(houses);
}