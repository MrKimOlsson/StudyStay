import { Request, Response } from "express";
import Apartment from "../../models/Apartment";

export async function getApartmentsController(req: Request, res: Response) {
  const apartments = await Apartment.find();
  res.json(apartments);
}