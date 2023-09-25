import { API_URL } from "./config";

export async function getUnits(unitType: string): Promise<TResidentialUnit[]> {
  console.log('get units unit type ' + unitType)
  const response = await fetch(`${API_URL}/${unitType}s`);
  return response.json();
}