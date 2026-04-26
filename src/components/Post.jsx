import { useState } from "react";
import styles from "./Post.module.css"

function Post({name, content="No content provided" , onEdit,onDelete}) { 
    const [isEditing, setIsEditing] = useState(false);
    const [editableContent, setEditableContent] = useState(content);

    const handleInputChange = (event) => {
        setEditableContent(event.target.value);
    };

    const handleEditClick = () => {
        setEditableContent(content);
        setIsEditing(true);
    };

    const handleCancelClick = () => {
        setIsEditing(false);
        setEditableContent(content);
    };

    const handleSaveClick = () => {
        onEdit(editableContent);
        setIsEditing(false);  
    };

    const handleDeleteClick = () => {
        onDelete(); // קריאה לפונקציית המחיקה
    };


    return(
    <div className={styles.container}>
        <h1 className={styles.name}>{name}</h1>
        <p className={styles.content}>{content}</p>

        {!isEditing && <button className={styles.editToggle} onClick={handleEditClick}>Edit</button>}

        {isEditing &&(
            <div className={styles.editArea}>
                <input
                    value={editableContent}
                    className={styles.input}
                    type="text"
                    onChange={handleInputChange}
                    placeholder="Write a comment..."
                    autoFocus
                />
                <div className={styles.buttonGroup}>
                    <button className={styles.button+" "+styles.buttonSave} onClick={handleSaveClick}>Save</button>
                    <button className={styles.button +" "+styles.buttonCancel} onClick={handleCancelClick}>Cancel</button> 
                    <button className={styles.button +" "+styles.buttonDelete} onClick={handleDeleteClick}>Delete</button> 
                </div>

            </div>
        )}

    </div>
    
  );
}

export default Post; 