import action_types_posts from '../Actions/Actions_Posts/Post_Types';

export const reducer_posts=(posts=[], action)=>{
    switch(action.type){
        case action_types_posts.GET_ALL_POSTS:
            return [...action.posts];
        case action_types_posts.GET_POSTS_BY_CATEGORY:
            return [...action.posts];
        case action_types_posts.GET_POST_DETAILS:
            return [{...action.post}];
        case action_types_posts.VOTE_POST:
            return posts.map(p=>p.id===action.post.id ? action.post : p);
        case action_types_posts.DELETE_POST:
            return posts.filter(p=>p.id!==action.post.id);
        case action_types_posts.EDIT_POST:
            return posts.map(p=>p.id===action.post.id ? action.post :p)
        case action_types_posts.ADD_POST:
            return posts ? [...posts, action.post] : [action.post];
        default:
            return posts;
    }
}
