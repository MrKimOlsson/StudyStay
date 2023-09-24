import { Request, Response } from "express";
import Apartment from "../../models/Apartment";

export async function deleteApartmentController(req: Request, res: Response) {
  const apartmentId = req.params.apartmentId;
  const apartment = await Apartment.findByIdAndDelete(apartmentId);
  res.json(apartment);
}