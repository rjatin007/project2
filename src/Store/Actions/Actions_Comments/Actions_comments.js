import * as CommentsApi from '../../../Utils/CommentsApi';
import action_types_comments from './Comments_Types';

export const getCommentsByPost=(id)=>
    dispatch=>{

        CommentsApi.getCommentsByPost(id)
        .then(res=>{

            dispatch({
                type:action_types_comments.GET_COMMENTS_BY_POST,
                comments : res,
                postId: id
            })
        })
    }

export const addComment=(comment)=>{

    return dispatch=>{
        CommentsApi.addComment(comment).then(res=>{

            dispatch({
                type:action_types_comments.ADD_COMMENT,
                comment
            })
        })
    }
}
export const delComment=(id)=>{

    return dispatch=>{
        CommentsApi.disableComment(id).then(res=>{

            dispatch({
                type:action_types_comments.DELETE_COMMENT,
                comment:res
            })
        })
    }
}
export const vote=(id,vote)=>{
    return dispatch=>{
        CommentsApi.vote(id,vote).then(res=>{
            dispatch({
                type:action_types_comments.VOTE_COMMENT,
                comment:res
            })
        })
    }
}


export const edit=(com)=>{

    return dispatch=>{
        CommentsApi.editComment(com.id,com).then(res=>{

            dispatch({
                type: action_types_comments.EDIT_COMMENT,
                comment:res
            })
        })
    }
}