import { Request, Response } from "express";
import Cabin from "../../models/Cabin";

export async function createCabinController(req: Request, res: Response) {
  const newCabin = new Cabin({
    title: req.body.title,
    price: req.body.price,
    description: req.body.description,
    periond: req.body.period,
  });
  const createdCabin = await newCabin.save();
  res.json(createdCabin);
}