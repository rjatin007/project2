import {GET_ALL_CATEGORIES} from '../Actions/Actions_categories'

const reducer_categories=(state=[], action)=>{
    switch(action.type){
        case GET_ALL_CATEGORIES:
            return [...action.categories];
        default:
            return state;
    }
}
export default reducer_categories;