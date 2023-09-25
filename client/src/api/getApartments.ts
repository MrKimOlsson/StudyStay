import { API_URL } from "./config";

export async function getApartments(): Promise<TApartment[]> {
  const response = await fetch(`${API_URL}/apartments`);
  return response.json();
}