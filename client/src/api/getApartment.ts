import { API_URL } from "./config";

// export async function getApartment(apartmentId: string): Promise<TResidentialUnit> {
//   const response = await fetch(`${API_URL}/apartments/${apartmentId}`);
//   return response.json();
// }

export async function getUnit(unitType: string, unitId: string): Promise<TResidentialUnit> {
    const response = await fetch(`${API_URL}/${unitType}/${unitId}`);
    return response.json();
  }