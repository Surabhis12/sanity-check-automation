// Intentionally bad code for sanity check failure test

const axios = require('axios')

async function fetchUsers(apiUrl) {
    // Missing proper validation
    if(!apiUrl){
        console.log("URL missing")
    }

    // Unused variable
    let counter = 0

    // Missing await (async issue)
    const response = axios.get(apiUrl)

    // Unused console.log and inconsistent indentation
        console.log("Fetched data maybe:", response.data)

    // Missing return
}

fetchUsers()
