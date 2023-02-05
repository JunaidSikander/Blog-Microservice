import {useEffect, useState} from "react";
import axios from "axios";
import CreateComment from "../comment/craete-comment.jsx";
import CommentList from "../comment/comment-list.jsx";

export default function PostList() {
    const [posts, setPosts] = useState([]);

    const fetchPosts = async () => {
        try {
            const response = await axios.get("http://localhost:4000/posts");
            setPosts(response.data);
        } catch (e) {
            console.error("Error in fetchPosts", e);
        }
    };

    const renderedPosts = Object.values(posts).map((post) => (
        <div className="card w-auto " key={post.id}>
            <div className="card-body">
                <h3>{post.title}</h3>
                <CommentList postId={post.id}/>
                <CreateComment postId={post.id}/>
            </div>
        </div>
    ))

    useEffect(() => {
        (async () => {
            await fetchPosts();
        })()
    }, []);

    return (
        <section className="border border-primary py-2 rounded">
            <h3 className="my-2 text-center">Posts</h3>
            <div className="d-flex flex-column flex-md-row flex-wrap justify-content-around">
                {renderedPosts}
            </div>
        </section>
    );
}


