import { API_URL } from "./config";
// import { TApartment } from "./getApartments";

export async function getApartment(apartmentId: string): Promise<TApartment> {
  const response = await fetch(`${API_URL}/apartments/${apartmentId}`);
  return response.json();
}