import {useState } from 'react';
import './App.css'
import Post from './components/Post'
import NewPost from './components/NewPost';

function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const [posts, setPosts] = useState([
    { name: "Shir Twig", content: "This is a simple post" },
    { name: "John Doe", content: "This is another post" },
    { name: "Jane Smith", content: "" },
  ]);

  const handleEditPost = (index, newContent) => {
    setPosts(prevPosts => {
      const updatedPosts = [...prevPosts];
      updatedPosts[index].content = newContent;
      return updatedPosts;
    });
  };

  const handleAddNewPost = (name, content) => {
    setPosts(prevPosts => [...prevPosts, { name, content }]);  };

  const handleLogPosts = () => {
    console.log("Current post array:", posts);
  };


  const handleAddNewPostClick = () => { 
    setIsFormOpen(true);
  };

  const CloseNewPostDialog = () => {
    setIsFormOpen(false);
  }

  const handleDeletePost = (index) => {
    setPosts(prevPosts => prevPosts.filter((_, i) => i !== index));
  };


  return(
    <> 
      
      {posts.map((post,index) => (
        <Post key={index} name={post.name} content={post.content} onEdit={(newContent) => handleEditPost(index, newContent)} onDelete={() => handleDeletePost(index)} />
      ))}
       
      {isFormOpen && (
        <>
        <div className="modalBackdrop" onClick={CloseNewPostDialog}/>
          <NewPost CloseDialog={CloseNewPostDialog} onAdd={handleAddNewPost}/>
        <div/>
        </>
      )}

      <div style={{display:"flex", justifyContent:"center", marginTop:"20px"}}>
        <button className="button" onClick={handleAddNewPostClick}>
          +Add New Post
        </button>
        <button className="button" onClick={handleLogPosts}>
          Log Posts to Console
        </button>
      </div> 
    </>  
    );


  }

export default  App;
 