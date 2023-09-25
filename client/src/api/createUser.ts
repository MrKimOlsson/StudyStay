import { API_URL } from "./config";
// import { UserResponse } from './userResponse';

export async function createUser(firstName: string, lastName: string, adress: string, email: string, phone: string): Promise<TUser> {
  const response = await fetch(`${API_URL}/users`, {
    method: "POST",
    body: JSON.stringify({
        firstName,
        lastName,
        adress,
        email,
        phone,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
}