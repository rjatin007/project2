import React , { Component } from 'react';
import {connect} from'react-redux';
import {NavLink} from 'react-router-dom';
import './Posts.css';

class Posts extends Component{



    render(){
        const {posts , postHandler }=this.props;

        return(
            <div>
            {
            (posts.length > 0 ?
            posts.map(post=>(
                <div className='post-viewer' key={post.id}>
                    <div>
                        <NavLink to={`/${post.category}/${post.id}/details`}>
                            <p onClick={()=>postHandler(post.id)}> Title :{post.title}</p>
                        </NavLink>
                        <p> by  {post.author}</p>
                        <p>Category : {post.category}</p>
                        <p>VoteScore : {post.voteScore}</p>
                        <p>Comments : {post.commentCount}</p>
                    </div>

                </div>
            ))
        : <p>Nothing in this category</p>)
            }

            </div>
        )
    }
}

const mapStateToProps=(state , ownProps)=>{
    return{
        posts: ownProps.posts,
        postHandler: ownProps.postHandler
    }
}
export default connect(mapStateToProps)(Posts);