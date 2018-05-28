import React , { Component } from 'react';
import { connect } from 'react-redux';
import {NavLink} from 'react-router-dom';
import {getPostsByCategory , getAllPosts } from '../Store/Actions/Actions_Posts/Actions_posts';

class Categories extends Component{

resetFilter=()=>{
    const { getPosts , hide } =this.props;
    hide();
    getPosts();
}
selectCategory=(name)=>{
    const {getByCategory , hide}=this.props;
    hide();
    getByCategory(name);

}
    render(){
        const {categories , addPost }=this.props;
        return(
            <div>
                <button onClick={this.resetFilter}>All</button>
                 {categories && categories.map(cat=>(
                     <li  key={cat.name}>
                     <NavLink to={`/${cat.path}/posts`}>
                         <button onClick={()=>{
                            this.selectCategory(cat.name)
                         }} >{cat.name}</button>
                     </NavLink>
                     </li>
                 ))}
                
            </div>
        )
    }
}
const mapDispatchToProps=(dispatch)=>({
    getPosts:()=>dispatch(getAllPosts()),
    getByCategory:(cat)=>dispatch(getPostsByCategory(cat))
})
const mapStateToProps=(state, ownProps)=>({
    categories: ownProps.categories,
    hide:ownProps.hide,
    addPost:ownProps.addPost
})
export default connect(mapStateToProps,mapDispatchToProps)(Categories);