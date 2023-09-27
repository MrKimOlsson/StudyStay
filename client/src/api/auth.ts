import { API_URL } from "./config";

export async function loginUser(username: string, password: string): Promise<User> {
  const response = await fetch(`${API_URL}/users/login`, {
    method: "POST",
    body: JSON.stringify({ username, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Login failed");
  }

  const data = await response.json();
  return data; // Assuming the server responds with a token upon successful login
}


// export async function login(credentials: LoginCredentials): Promise<User> {
//   const response = await fetchData("/users/login",
//       {
//           method: "POST",
//           headers: {
//               "Content-Type": "application/json",
//           },
//           body: JSON.stringify(credentials),
//       });
//   return response.json();
// }