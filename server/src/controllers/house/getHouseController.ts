import { Request, Response } from "express";
import House from "../../models/House";

export async function getApartmentController(req: Request, res: Response) {
  const { houseId } = req.params;
  const house = await House.findById(houseId);
  res.json(house);
}