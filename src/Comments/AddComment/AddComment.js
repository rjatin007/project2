import React , { Component } from 'react';
import {connect} from 'react-redux';
import generate_id from '../../Utils/Id_Generator';
import {addComment} from '../../Store/Actions/Actions_Comments/Actions_comments';
class AddComment extends Component{
state={
    comment:{
    id: generate_id(),
    timestamp: Date.now(),
    body: '',
    author: '',
    parentId: ""
    }
}
componentWillMount=()=>{
    const {id}=this.props;
    this.setState(state=>({
        ...state,
        comment:{
            ...state.comment,
            parentId: id
        }

    }))
}
authorChangedHandler=(event)=>{
    const val=event.target.value
    this.setState(state=>({
        ...state,
        comment:{
            ...state.comment,
            author: val
        }

    }))
}
bodyChangedHandler=(event)=>{
    const val=event.target.value
    this.setState(state=>({
        ...state,
        comment:{
            ...state.comment,
            body: val
        }

    }))
}
addCommentHandler=(e)=>{
    e.preventDefault();
    this.props.addComment(this.state.comment)
}
    render(){
        const { body , author }=this.state;
        return (
            <div>
                <h2>Add Comment</h2>
                <form>
                    <input type="text"
                     onChange={(event)=>this.authorChangedHandler(event)}
                     value={author} />
                    <input type="text"
                     onChange={(event)=>this.bodyChangedHandler(event)}
                     value={body}/>
                   <button onClick={this.addCommentHandler }>Submit</button>
                </form>
            </div>
        )
    }
}
const mapStateToProps=(state,ownProps)=>({
    id : ownProps.id
})
const mapDispatchToProps=(dispatch)=>({
    addComment: (comment)=>dispatch(addComment(comment))
})
export default connect(mapStateToProps,mapDispatchToProps)(AddComment);