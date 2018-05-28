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



// Comments APIs || Location : comments.js

// To fetch the comments by post || Server side name : getByParent
export const getCommentsByPost = (postId) => {

    return fetch(`${api}/posts/${postId}/comments`, { headers })
            .then(res=>res.json())



}
// To UpVote or DownVote || Server side name : vote
export const vote =(id, vote)=>{

    return fetch(`${api}/comments/${id}`, {
        method : 'POST',
        headers : {
            ...headers,
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify({option : vote})
     } ).then(res=>res.json()).then(res=>res)
}

// To get details of a comment || Server side name : get
export const getCommentDetails = (id)=>
    fetch(`${api}/comments/${id}`, { headers })
    .then(res=>res.json())

// To add a comment || Server side name : add
export const addComment=(comment)=>{
    console.log(comment);
    return fetch(`${api}/comments`, {
        method : 'POST',
        headers : {
            ...headers,
            'Content-Type': 'application/json'
        },
        body : JSON.stringify(comment)
    }).then(res=>res.json()).then(res=>res)
}


// To edit a comment || Server side name : edit
export const editComment=(id,comment)=>
    fetch(`${api}/comments/${id}`, {
        method : 'PUT',
        headers : {
            ...headers,
            'Content-Type' : 'application/json'
        },
        body  : JSON.stringify(comment)
    }).then(res=>res.json()).then(res=>res)

// To disable comment || Server side name : disable
export const disableComment=(id)=>{
    return fetch(`${api}/comments/${id}`, {
        method : 'DELETE',
        headers : {
            ...headers,
            'Content-Type': 'application/json'
        }
    }).then(res=>res.json()).then(res=>res)
}

