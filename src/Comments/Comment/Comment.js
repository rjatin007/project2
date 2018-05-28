import React , { Component }  from 'react';
import {connect} from 'react-redux';
import './Comment.css';
import {delComment , vote , edit}  from '../../Store/Actions/Actions_Comments/Actions_comments';
class Comment extends Component{
    state={
        UpVote:'upVote',
        DownVote : 'downVote',
        edit: false,
        body:""
    }
    startEdit=(val)=>{
        console.log("starting edit", val)
        this.setState({
            edit: true,
            body:val
        })
    }
    handleChange=(event)=>{
        const val=event.target.value
        this.setState({
            body: val
        })
    }
    submit=()=>{
        const {comment , Edit}=this.props;
        const {body}=this.state;
        comment.body=body;
        this.setState({
            body:"",
            edit:false
        })
        Edit(comment)
    }
    cancel=()=>{
        this.setState({
            body:'',
            edit:false
        })
    }
    render(){
        const { comment , upVote , downVote , Delete } = this.props;
        const { UpVote , DownVote , edit , body} =this.state;

        return(
            <div className='comment'>
                    <div>
                        <p>{comment.id}</p>
                        <p>{comment.author}</p>
                        <p>{comment.body}</p>
                        <p>{comment.voteScore}</p>
                    </div>

                    <div>
                            <button onClick={()=>upVote(comment.id , UpVote)}>UpVote</button>
                            <button onClick={()=>downVote(comment.id , DownVote)}>DownVote</button>
                            <button onClick={()=>this.startEdit(comment.body)}>Edit</button>
                            <button onClick={()=>Delete(comment.id)}>Delete</button>
                    </div>
                    { edit===true ? (
                        <div>
                            <div>
                                <p>body : </p><input type="text" value={body} onChange={this.handleChange}/>

                            </div>

                            <button onClick={this.submit}>Submit</button>
                            <button onClick={this.cancel}>Cancel</button>
                        </div>
                    ): null}
            </div>
        )
    }

}
const mapStateToProps=(state, ownProps)=>{
    return({
        comment:ownProps.comment
    })
}
const mapDispatchToProps=(dispatch)=>{

    return({
        Delete:(id)=>dispatch(delComment(id)),
        upVote:(id, Vote)=>dispatch(vote(id,Vote)),
        downVote:(id, Vote)=>dispatch(vote(id,Vote)),
        Edit:(comment)=>dispatch(edit(comment))
    })
}
export default connect(mapStateToProps, mapDispatchToProps)(Comment);