import { Request, Response } from "express";
import House from "../../models/House";

export async function deleteHouseController(req: Request, res: Response) {
  const houseId = req.params.houseId;
  const house = await House.findByIdAndDelete(houseId);
  res.json(house);
}