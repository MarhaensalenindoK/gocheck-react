import { useState } from "react";

function Form({ onAddItem }) {
    const [title, setTitle] = useState("");
    function handleSubmit(e) {
        e.preventDefault();
        if (!title) return;
        const item = {
            id: Date.now(),
            title,
            done: false,
        };
        onAddItem(item);
        setTitle("");
    }

    return (
        <form className="add-form" onSubmit={handleSubmit}>
            <h3>Ada yang mau dicatat?</h3>
            <input
                type="text"
                name="title"
                id=""
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Tulis disini"
                required={true}
            />
            <button>Add</button>
        </form>
    );
}

export default Form;
