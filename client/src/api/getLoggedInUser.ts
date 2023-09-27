import { API_URL } from "./config";

export async function getLoggedInUser(): Promise<User> {
  const response = await fetch(`${API_URL}/users`);
  return response.json();
}