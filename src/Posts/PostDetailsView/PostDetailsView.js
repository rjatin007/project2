import React , { Component } from 'react';
import * as action_posts from '../../Store/Actions/Actions_Posts/Actions_posts';
import {getCommentsByPost} from '../../Store/Actions/Actions_Comments/Actions_comments';
import {connect } from 'react-redux';
import Comments from '../../Comments/Comments';
import AddComment from '../../Comments/AddComment/AddComment';
class PostDetailsView extends Component{
    state={
        upVote:'upVote',
        downVote:'downVote',
        edit:false,
        body:'',
        title:''
    }
    componentDidMount=()=>{
        const {id , getDetails , getComments }=this.props;
        if( id!==undefined ) {
            getDetails(id);
            getComments(id);
        }
    }
    startEdit=(post)=>{
        const {body, title}=post;
        this.setState({
            edit:true,
            title,
            body
        })
    }
    handleTitleChange=(event)=>{
        const val=event.target.value;
        this.setState({
            title:val
        })
    }
    handleBodyChange=(event)=>{
        const val=event.target.value;
        this.setState({
            body:val
        })
    }
    submit=(post)=>{
        const {title , body}=this.state;
        post.title=title;
        post.body=body;
        this.setState({
            edit:false,
            body:'',
            title:''
        })
        this.props.submitPost(post);
    }
    cancel=()=>{
        this.setState({
            edit:false,
            body:'',
            title:''
        })
    }
    render(){
        const {
            posts,
            id,
            upVotePost,
            downVotePost,
            delPost,
            comments }=this.props;
        const { upVote , downVote , edit ,body ,title}=this.state;
        const post=posts[0];

        return(
          <div>
              { post!==undefined ?
                (<div>
                    <div>
                        <p>{post.category}</p>
                        <p>{post.id}</p>
                        <p>{post.title} by  {post.author}</p>
                        <p>{post.body}</p>
                        <p>{post.voteScore}</p>
                        <p>{post.commentCount}</p>
                    </div>
                    <div>
                        <button onClick={()=>upVotePost(post.id,upVote)}>UpVote</button>
                        <button onClick={()=>downVotePost(post.id,downVote)}>DownVote</button>
                        <button onClick={()=>this.startEdit(post)} >Edit</button>
                        <button onClick={()=>delPost(post.id)}>Delete</button>
                </div>
                {edit === true ? (<div>
                    <div>
                        <div>
                            <p>title : </p><input type="text" value={title} onChange={this.handleTitleChange}/>
                        </div>
                        <div>
                            <p>body: </p><input type="text" value={body} onChange={this.handleBodyChange}/>
                        </div>

                    </div>
                    <button onClick={()=>this.submit(post)}>Submit</button>
                    <button onClick={this.cancel}>Cancel</button>
                </div>)
                :( <div>
                    <Comments comments={comments}/>
                    <AddComment id={id}/>
                    </div>)}

              </div>) : <p>no post</p>}

          </div>
        )
    }
}
const mapStateToProps=(state , ownProps)=>{
    console.log(state.posts)
    return ({
        id: ownProps.postId,
        posts: state.posts,
        comments:state.comments
    })
}
const mapDispatchToProps=(dispatch)=>{
    return({
        getDetails:(id)=>dispatch(action_posts.getPostDetails(id)),
        getComments:(id)=>dispatch(getCommentsByPost(id)),
        upVotePost:(id,option)=>dispatch(action_posts.votePost(id,option)),
        downVotePost:(id,option)=>dispatch(action_posts.votePost(id,option)),
        delPost:(id)=>dispatch(action_posts.deletePost(id)),
        submitPost:(post)=>dispatch(action_posts.editPost(post))
    })
}
export default connect(mapStateToProps, mapDispatchToProps)(PostDetailsView);