import React, { useState } from 'react';

const AddCommentForm = ({ projectName, setProjectInfo }) => {
    const [username, setUsername] = useState('');
    const [commentText, setCommentText] = useState('');

    const addComment = async () => {
        const result = await fetch(`/api/projects/${projectName}/add-comment/`, {
            method: 'POST',
            body: JSON.stringify({
                username: username,
                text: commentText
            }),
            headers: { 'Content-Type': 'application/json' }
        })

        const body = await result.json();
        setProjectInfo(body);
        setUsername('');
        setCommentText('');
    }


    

    return (
        <>
            <div id="add-comment-form">
                <h3>Leave a comment!</h3>
                <label>
                    Name:
                <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
                </label>
                <label>
                    Comment:
                <textarea rows="4" cols="50" value={commentText} onChange={(event) => setCommentText(event.target.value)} />
                </label>

                <button onClick={() => addComment()}>Add Comment</button>
            </div>
        </>
    );
}

export default AddCommentForm;
