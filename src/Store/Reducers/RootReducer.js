import {combineReducers} from 'redux';
import reducer_categories from './Reducer_Categories';
import {reducer_posts} from './Reducer_Posts';
import reducer_comments from './Reducer_Comments';
const rootReducer = combineReducers({
    categories :reducer_categories,
    posts : reducer_posts,
    comments :  reducer_comments,
})

export default rootReducer;