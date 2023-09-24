import { Request, Response } from "express";
import Apartment from "../../models/Apartment";

export async function getApartmentController(req: Request, res: Response) {
  const { apartmentId } = req.params;
  const apartment = await Apartment.findById(apartmentId);
  res.json(apartment);
}