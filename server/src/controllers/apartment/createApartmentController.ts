import { Request, Response } from "express";
import Apartment from "../../models/Apartment";

export async function createApartmentController(req: Request, res: Response) {
  const newApartment = new Apartment({
    title: req.body.title,
    price: req.body.price,
    description: req.body.description,
    periond: req.body.period,
  });
  const createdApartment = await newApartment.save();
  res.json(createdApartment);
}