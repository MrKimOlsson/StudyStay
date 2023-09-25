import { API_URL } from "./config";

export async function getApartments(): Promise<TResidentialUnit[]> {
  const response = await fetch(`${API_URL}/apartments`);
  return response.json();
}