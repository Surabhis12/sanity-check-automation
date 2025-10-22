import axios from "axios";

export async function fetchData(url) {
  if (!url) throw new Error("API URL is required");

  const response = await axios.get(url, { timeout: 5000 });
  return response.data;
}
