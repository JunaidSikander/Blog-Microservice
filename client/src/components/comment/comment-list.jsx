import {useEffect, useState} from "react";
import axios from "axios";

export default function CommentList({postId}) {
    const [comments, setComments] = useState([]);

    const fetchComments = async () => {
        try {
            const response = await axios.get(`http://localhost:4001/posts/${postId}/comments`);
            setComments(response.data);
        } catch (e) {
            console.error("Error in fetchComments", e);
        }
    };

    const renderedComments = comments.map((comment) => (
        <li key={comment.id}> {comment.content} </li>
    ))

    useEffect(() => {
        (async () => {
            await fetchComments();
        })()
    }, []);

    return (
        <ul>{renderedComments}</ul>
    );
}


