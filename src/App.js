// package imports
import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Route , NavLink , Switch, BrowserRouter} from 'react-router-dom';

// file imports
import './App.css';
import Categories from './Categories/Categories';
import Posts from './Posts/Posts';
import PostDetailsView from './Posts/PostDetailsView/PostDetailsView';
import {getAllPosts} from './Store/Actions/Actions_Posts/Actions_posts';
import {getAllCategories} from './Store/Actions/Actions_categories';
import AddPost from './Posts/AddPost/AddPost';

class App extends Component {
  state={
    postId:null,
    showPostDetails:false,
    location : true
  }
componentDidMount=()=>{
  this.props.getAllCategories();
  this.props.getAllPosts();
}
showPostDetailsHandler=(id)=>{
  this.setState({
        showPostDetails : true,
        postId: id
    })
}
hidePostDetailsHandler=()=>{
  this.setState({
    showPostDetails :false,
    postId: null
  })
}

  render() {
    const {showPostDetails, postId }=this.state;
    const location = this.state.location || this.context.router.history.location;
      console.log(this.context)
    return (
      <BrowserRouter>
      <div className="App">
      <Switch>
        <Route exact path="/" location={location} render={()=>(
         <div>
            <Categories hide={this.hidePostDetailsHandler}
              categories={this.props.categories}/>
              <NavLink to="/new-post">Add Post</NavLink>
              {
                showPostDetails ?
                (<div>
                  <Route exact path='/:category/:postId/details' 
                  render={()=>(<PostDetailsView postId={postId}/>)} />
                </div>)
                :
                (<Route exact path='/:category/posts' 
                render={()=>(<Posts postHandler={this.showPostDetailsHandler}
                    posts={this.props.posts}/>)}/>)
                
              }
          </div>
        )}/>
        <Route exact path="/new-post" location={location} render={()=>(
          <AddPost categories={this.props.categories}/>
        )}/>
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}
const mapStateToProps=(state)=>{
  return({
    posts : state.posts,
    categories:state.categories
  })
}
const mapDispatchToProps=(dispatch)=>{
  return({
    getAllPosts:()=>dispatch(getAllPosts()),
    getAllCategories:()=>dispatch(getAllCategories())
  })
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
