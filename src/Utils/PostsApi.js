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

// Posts APIs || Location : posts.js

// To fetch all posts || Server side name : getAll
export const getAllPosts = () =>
    fetch(`${api}/posts`, { headers })
        .then(res => res.json())
        .then(res => {
            // console.log(res)
            return res
        })



// To fetch posts by category || Server side name : getByCategory
export const getPostsByCategory = (category) =>
    fetch(`${api}/${category}/posts`, { headers })
        .then(res => res.json())
        .then(res => {
            return res
        })



// functions below are not called yet
// To add a new posts || Server side name : add
export const addPost = (post) =>
    fetch(`${api}/posts`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(post)
    })
        .then(res => res.json()).then(res=>res)

// To get the details of a post || Server side name : get
export const getPostDetails = (postId) =>
    fetch(`${api}/posts/${postId}`, { headers })
        .then(res => res.json())
        .then(data => data)

// To upvote/downvote the post || Server Side name : vote
export const vote = (postId, option) =>
    fetch(`${api}/posts/${postId}`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ option })
    })
        .then(res => res.json())
        .then(data => data)

// To disable a post  || Server se name : disable
export const disablePost = (postId) =>
    fetch(`${api}/posts/${postId}`, {
        method: 'DELETE',
        headers
    })
        .then(res => res.json())
        .then(data => data)

// To edit a post || Server side name : edit
export const editPost = (postId, post) =>
    fetch(`${api}/posts/${postId}`, {
        method: 'PUT',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(post)
    })
        .then(res => res.json())
        .then(data => data)