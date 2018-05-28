import action_types_comments from '../Actions/Actions_Comments/Comments_Types';


const reducer_comments=(comments=null,action)=>{
    switch(action.type){
        case action_types_comments.GET_COMMENTS_BY_POST:
            return  [...action.comments];
        case action_types_comments.ADD_COMMENT:
            return comments ? [...comments,action.comment]: [action.comment];
        case action_types_comments.DELETE_COMMENT:
                const {comment}=action;
            return comments.filter(c=>c.id!==comment.id);
        case action_types_comments.VOTE_COMMENT:
            return comments.map(c=>c.id===action.comment.id ?  action.comment : c)
        case action_types_comments.EDIT_COMMENT:
            return comments.map(c=>c.id===action.comment.id ?  action.comment : c)
        default:
            return comments;
    }
}

export default reducer_comments;