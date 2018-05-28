// This is the api file for expressions app
const api = "http://localhost:3001"
// Unique Token for the posts
let token = localStorage.token
if (!token)
    token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
    'Accept': 'application/json',
    'Authorization': token
}

// API function names are changed on front-end,
// Server side names of functions are mentioned along


// Categories APIs || Location : categories.js

// API below will fetch all the categories || Server side name : getAll
export const getAllCategories = () => {

    return fetch(`${api}/categories`, { headers })
        .then(res => res.json())
        .then(res => res.categories);

}