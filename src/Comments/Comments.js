import React ,{ Component } from 'react';
import Comment from './Comment/Comment';
import { connect } from 'react-redux';
class Comments extends Component{
    render(){
        const {comments} = this.props;

        return(
            <div>
                {comments && comments.map(comment=>(
                    <Comment key={comment.id} comment={comment}/>
                ))}
            </div>
        )
    }
}
const mapStateToProps=(state, ownProps)=>({
    id: ownProps.id,
    comments: ownProps.comments
})
export default connect(mapStateToProps)(Comments);