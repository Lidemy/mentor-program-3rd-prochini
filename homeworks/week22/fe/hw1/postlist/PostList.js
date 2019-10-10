import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';//higher order 
import axios from 'axios'
import'./PostList.css'

class PostList extends Component{
  constructor(props) {
    super(props);// 繼承 cpmponent funnction 進行初始化
    this.state={
        posts:[],
    }
  }
  componentDidMount(){
    axios.get('https://qootest.com/posts?_sort=id&_order=desc')
    .then(response=>{
        this.setState({
            posts:response.data
        })
    })
  }
  
  render(){
      const{posts}=this.state
      const{history}= this.props
      return(
        <div>
                <div className='post_list'>
                {posts.map(post=>(
                    <div className='post-item' key={post.id} onClick={()=>{
                        history.push('/post/'+post.id)
                    }}>

                        <h1 className='post-item__id'>{post.title}</h1>
                        <span className='post_author'>{post.author}</span>
                        <p className='post-item__body'>{post.body}</p>
                    </div>
                ))}
            </div>
        </div>


      )
  }
}
export default withRouter(PostList);
