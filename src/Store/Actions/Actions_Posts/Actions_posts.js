import * as PostsApi from '../../../Utils/PostsApi';
import  action_types_posts from './Post_Types';

export const getAllPosts=()=>{
    return dispatch=>{
        PostsApi.getAllPosts().then(res=>{
            dispatch({
                type: action_types_posts.GET_ALL_POSTS,
                posts:res
            })
        })
    }
}
export const getPostsByCategory=(category)=>{
    return dispatch=>{
        PostsApi.getPostsByCategory(category).then(res=>{
            dispatch({
                type:action_types_posts.GET_POSTS_BY_CATEGORY,
                posts:res
            })
        })
    }
}
export const getPostDetails=(id)=>{
    return dispatch=>{
        PostsApi.getPostDetails(id).then(res=>{
            // console.log(res);
            dispatch({
                type : action_types_posts.GET_POST_DETAILS,
                post : res
            })
        })
    }
}
export const votePost=(id,option)=>{
    return dispatch=>{
        PostsApi.vote(id,option).then(res=>{
            console.log(res)
            dispatch({
                type: action_types_posts.VOTE_POST,
                post:res
            })
        })
    }
}
export const deletePost=(id)=>{

    return dispatch=>{
        PostsApi.disablePost(id).then(res=>{
            console.log(res)
            dispatch({
                type:action_types_posts.DELETE_POST,
                post:res
            })
        })
    }
}
export const editPost=(post)=>{
    return dispatch=>{
        PostsApi.editPost(post.id,post).then(res=>{
            console.log(res)
            dispatch({
               type:action_types_posts.EDIT_POST,
               post:res
            })
        })
    }
}
export const addPost=(post)=>{
    return dispatch=>{
        PostsApi.addPost(post).then(res=>{
            dispatch({
                type: action_types_posts.ADD_POST,
                post:res
            })
        })
    }
}