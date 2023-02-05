import {useState} from "react";
import axios from "axios"

export default function CreatePost() {
    const [title, setTitle] = useState("");
    const submitHandler = async (event) => {
        try {
            event.preventDefault();

            // Saving Post API
            await axios.post(
                "http://localhost:4000/posts",
                {title}
            )

            //Reset State after Save Post Api
            setTitle("")
        } catch (e) {
            console.error("Error in submitHandler", e);
        }
    }

    return (
        <section className="border border-primary p-5 rounded">
            <h3 className="my-2 text-center">Create Post</h3>
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                        id="title"
                        className="form-control"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                    />
                </div>
                <div className="text-center">
                    <button className="btn btn-primary mt-2 text-center w-100"> Submit</button>
                </div>
            </form>
        </section>
    )
}
