/**
 * User Data Processor Module
 * Performs fetching, validation, and transformation of user data.
 */

const axios = require('axios');

/**
 * Fetch user data from remote API.
 * @param {string} apiUrl - API endpoint URL
 * @returns {Promise<Object[]>} - List of valid users
 */
async function fetchAndProcessUsers(apiUrl) {
  if (typeof apiUrl !== 'string' || !apiUrl.startsWith('http')) {
    throw new Error('Invalid API URL provided.');
  }

  try {
    const response = await axios.get(apiUrl);
    const users = Array.isArray(response.data) ? response.data : [];

    const validUsers = users
      .filter(isValidUser)
      .map(transformUser);

    console.log(`Processed ${validUsers.length} valid users.`);
    return validUsers;
  } catch (err) {
    console.error('Error while fetching users:', err.message);
    throw err;
  }
}

/**
 * Validate user object structure.
 * @param {Object} user - User object to validate
 * @returns {boolean}
 */
function isValidUser(user) {
  return (
    user &&
    typeof user.id === 'number' &&
    typeof user.name === 'string' &&
    typeof user.email === 'string' &&
    user.email.includes('@')
  );
}

/**
 * Transform user object to standardized format.
 * @param {Object} user
 * @returns {Object}
 */
function transformUser(user) {
  return {
    id: user.id,
    fullName: user.name.trim(),
    email: user.email.toLowerCase(),
    domain: user.email.split('@')[1] || 'unknown',
  };
}

// Example usage (you can comment this out in production)
if (require.main === module) {
  fetchAndProcessUsers('https://jsonplaceholder.typicode.com/users')
    .then((data) => console.log('Sample data:', data))
    .catch((err) => console.error('Process failed:', err.message));
}

module.exports = { fetchAndProcessUsers, isValidUser, transformUser };
