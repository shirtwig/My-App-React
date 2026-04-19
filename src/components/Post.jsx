import { useState } from "react";
import styles from "./Post.module.css"

function Post({name, content="No content provided"}) { 
    const [postContent, setPostContent] = useState(content);

    const handleInputChange = (event) => {
        setPostContent(event.target.value);
    };

    return(
    <div className={styles.container} onClick={() => {alert(`Post by ${name} clicked!`);}}>
        <h1 className={styles.name}>{name}</h1>
        <p className={styles.content}>{postContent}</p>
        <input
            className={styles.input}
            type="text"
            onChange={handleInputChange}
            placeholder="Write a comment..."
        />
    </div>
  );
}

export default Post; 