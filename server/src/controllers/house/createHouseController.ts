import { Request, Response } from "express";
import House from "../../models/House";

export async function createHouseController(req: Request, res: Response) {
  const newHouse = new House({
    title: req.body.title,
    price: req.body.price,
    description: req.body.description,
    periond: req.body.period,
  });
  const createdHouse = await newHouse.save();
  res.json(createdHouse);
}