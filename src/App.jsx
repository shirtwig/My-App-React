import './App.css'
import Post from './components/Post'

function App() {
  return(
    <>
      <Post name="Shir Twig" content="This is a simple post" />
      <Post name="John Doe" content="This is another post" />
      <Post name="Jane Smith" />

    </>  
  );
}

export default  App;
