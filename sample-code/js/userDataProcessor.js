// Corrected code for sanity check pass

const axios = require('axios');

/**
 * Fetch users from a given API URL.
 * @param {string} apiUrl - The API endpoint URL
 * @returns {Promise<Object>} - The API response data
 */
async function fetchUsers(apiUrl) {
  if (!apiUrl) {
    throw new Error("API URL is required");
  }

  // Properly await the async call
  const response = await axios.get(apiUrl);

  // Log safely (allowed if needed) or remove console.log to satisfy stricter lint rules
  // console.log("Fetched data:", response.data);

  // Return response data
  return response.data;
}

// Example usage
(async () => {
  try {
    const data = await fetchUsers("https://jsonplaceholder.typicode.com/users");
    console.log("Fetched users:", data);
  } catch (error) {
    console.error(error.message);
  }
})();
