import React ,{Component}from 'react';
import './App.css';

function About(){
  return(
    <h1>this is my blog</h1>
  )
}

class SinglePost extends React.Component {
  state={
    post:[],
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/posts?id='+this.props.id)
    .then(res=>res.json())
    .then(data=>{
      this.setState({
        post:data,
        
      })
    })
  }

  render(){
    
    return (
      <div className="posts">      
      <h1>Blog Post</h1>
      {this.state.post.map(article=>(
      <div className="article" key={article.id} >    
      <h1 id={article.id} >{article.title}</h1>
      <p>{article.body}</p>
      <button onClick={this.props.back}>Go back</button>
      </div>
      ))}
      </div>
    );
    
  }
}

class PostList extends React.Component {
  state={
    postlist:[],
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then(data=>{
      this.setState({
        postlist:data,
        
      })
    })
  }
  
  render(){
    
    return (
      <div className="posts">      
      <h1>Blog Post</h1>
      {this.state.postlist.map(article=>(
      <div className="article" key={article.id} >    
      <h1 id={article.id} onClick={this.props.handlePageChange}>{article.title}</h1>
      </div>
      ))}
      </div>
    );

    
    
  }
}
class Blog extends Component{
  constructor(props){
    super(props);
    this.state={
      locate:'Home',
      pageId:'',
    }
  }
  componentDidUpdate(){
    this.switchPage()
  }
  handlePageChange=(e)=>{
    let num = e.target.id
    this.setState({
      locate:'Article',
      postId: num
    })
  }
  backToHome=()=>{
    this.setState({
      locate:'Home',
    })
  }  
  switchPage(){
    if(this.state.locate === 'Home'){
      return <PostList handlePageChange={this.handlePageChange}/>
      
    }else if(this.state.locate === 'About'){
      return <About />
    }else if(this.state.locate === 'Article'){
      return <SinglePost  id={this.state.postId} back={this.backToHome}/>
    }
  }

  render(){

    return(
      <div>
        <nav>
          <span >Blog</span>
          <span className="Home" onClick={()=>{
            this.setState({
              locate:'Home',
            })}}>Home</span>
          <span className="About"onClick={()=>{
            this.setState({
              locate:'About',
            })}}>About</span>
      </nav>
      <div className="container">
      {this.switchPage()}
        </div>


    
      
    </div> 
    )
  }
} 

export default Blog;
