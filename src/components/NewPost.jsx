import styles from "./NewPost.module.css";
import { useState } from "react";

function NewPost({CloseDialog, onAdd }) {
        const [authorName, setAuthorName] = useState("");
        const [postContent, setPostContent] = useState("");
    
        const handleAuthorNameChange = (event) => {
            setAuthorName(event.target.value);
        };

        const handlePostContentChange = (event) => {
            setPostContent(event.target.value);
        };
    
        const handleSubmit = (event) => {
            event.preventDefault();
            onAdd(authorName, postContent);
            setAuthorName("");
            setPostContent("");
            CloseDialog();
        };

        return(
            <form className={styles.model} onSubmit={handleSubmit}>
    
                <h2 className={styles.title}>Add New Post</h2>

            <div className={styles.formGroup}>
                <label htmlFor="name">Author Name:</label>
                <input
                value={authorName}
                type="text"
                id="name"
                placeholder="Enter your name"
                className={styles.input}
                autoFocus
                onChange={handleAuthorNameChange}
                />
            </div>
            
            <div className={styles.formGroup}>
                <label htmlFor="content">Post Content:</label>
                <textarea
                id="content"
                placeholder="Write your post here..."
                className={styles.textarea}
                rows="4"
                value={postContent}
                onChange={handlePostContentChange}
                />
            </div>

            <div className={styles.buttonGroup}>
                <button type="submit" className={styles.submitButton}>Create Post</button>
                <button type="button" className={styles.cancelButton} onClick={CloseDialog}>
                    Cancel
                </button>
            </div>


        </form>
    );
}

export default NewPost;