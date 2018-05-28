import * as CategoriesApi from '../../Utils/CategoriesApi';

export const GET_ALL_CATEGORIES='GET_ALL_CATEGORIES';


export const getAllCategories=()=>{
   return dispatch=>{
        CategoriesApi.getAllCategories()
        .then(res=>{
            dispatch({
                type: GET_ALL_CATEGORIES,
                categories : res
            })
    })
   }
}