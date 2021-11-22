import './addPost.css'

const AddPost = () => {
    return(
        <section className="add-post">
            <h2>Create your article</h2>
            <form >
                <input type="text" name="title" required placeholder="Title" maxLength="20"/>
                <textarea name="article" required placeholder="Article" maxLength="400"></textarea>
                <input type="date" name="date" required ></input>
                <div>
                    <input type="text" name="tag1" required placeholder="first tag" maxLength="12" />
                    <input type="text" name="tag2" required placeholder="second tag" maxLength="12" />
                </div>
                <input type="submit" id="post-submit" />
            </form>
        </section>
    )
}

export default AddPost