import React , { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import generate_id from '../../Utils/Id_Generator';
import {addPost} from '../../Store/Actions/Actions_Posts/Actions_posts';
class AddPost extends Component{
    state={
        post:{
            id: generate_id(),
            timestamp:Date.now(),
            title: '',
            body:'',
            author: '',
            category: '',

        }
    }
    titleChangeHandler=(event)=>{
        const val=event.target.value;
        this.setState(state=>({
            ...state,
            post:{
                ...state.post,
                title:val
            }
        }))
    }
    bodyChangeHandler=(event)=>{
        const val=event.target.value;
        this.setState(state=>({
            ...state,
            post:{
                ...state.post,
                body:val
            }
        }))
    }
    authorChangeHandler=(event)=>{
        const val=event.target.value;
        this.setState(state=>({
            ...state,
            post:{
                ...state.post,
                author:val
            }
        }))
    }
    setCategoryHandler=(event)=>{
        const val=event.target.value;
        this.setState(state=>({
            ...state,
            post:{
                ...state.post,
                category:val
            }
        }))
    }
    addPostHandler=(e)=>{
        e.preventDefault();
        const post= {...this.state.post};
        this.setState(state=>({
            ...state,
            post:{
                ...state.post,
                    id: '',
                    timestamp:'',
                    title: '',
                    body:'',
                    author: '',
                    category: ''
            }
        }))
        this.props.add(post);
    }
    render(){
        const {categories , hide}=this.props;
        const { body , title , author } = this.state;
        return(
            <div>
                <h2>Add Post</h2>
                <div>
                    <form>
                        <input  type="text"
                                value={title}
                                onChange={this.titleChangeHandler}
                                placeholder="title..." />

                        <input  type="text"
                                value={body}
                                onChange={this.bodyChangeHandler}
                                placeholder="content..."/>
                        <input  type="text"
                                value={author}
                                onChange={this.authorChangeHandler}
                                placeholder='aurthor..'/>
                        <div>
                            <select onChange={this.setCategoryHandler}>
                                {categories && categories.map(c=>(
                                    <option key={c.name}>{c.name}</option>
                                ))}
                            </select>
                        </div>
                        
                            <button onClick={this.addPostHandler}>
                                <Link to = "/" > Submit </Link>
                            </button>
                        
                    <Link to = "/" > Cancel </Link>
                        
                    </form>
                </div>
            </div>
        )
    }
}
const mapStateToProps=(state,ownProps)=>({
    categories: ownProps.categories
})
const mapDispatchToProps=(dispatch)=>({
    add:(post)=>dispatch(addPost(post))
})
export default connect(mapStateToProps,mapDispatchToProps)(AddPost);
