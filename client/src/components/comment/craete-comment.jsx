import {useState} from "react";
import axios from "axios"

export default function CreateComment({postId}) {
    const [content, setContent] = useState("");
    const submitHandler = async (event) => {
        try {
            event.preventDefault();

            // Saving Post API
            await axios.post(
                `http://localhost:4001/posts/${postId}/comments`,
                {content}
            )

            //Reset State after Save Post Api
            setContent("")
        } catch (e) {
            console.error("Error in submitHandler", e);
        }
    }

    return (
        <section className="border border-primary p-5 rounded">
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <label className="my-1" htmlFor="content">New Comment</label>
                    <input
                        id="content"
                        className="form-control"
                        onChange={(e) => setContent(e.target.value)}
                        value={content}
                    />
                </div>
                <div className="text-center">
                    <button className="btn btn-primary mt-2 text-center w-100"> Submit</button>
                </div>
            </form>
        </section>
    )
}
