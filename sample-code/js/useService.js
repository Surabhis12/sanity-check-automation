import { fetchData } from "./apiClient.js";

export async function getUsers() {
  try {
    const users = await fetchData("https://jsonplaceholder.typicode.com/users");
    return users.map((u) => ({
      id: u.id,
      name: u.name,
      email: u.email,
    }));
  } catch (err) {
    console.error("Error fetching users:", err.message);
    return [];
  }
}
