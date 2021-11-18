import './addPost.css'

const AddPost = () => {
    return(
        <section className="add-post">
            <h2>Create your article</h2>
            <form >
                <input type="text" placeholder="Title" maxLength="20"/>
                <textarea placeholder="Article" maxLength="400"></textarea>
                <input type="date" ></input>
                <div>
                    <input type="text" placeholder="first tag" maxLength="12" />
                    <input type="text" placeholder="second tag" maxLength="12" />
                </div>
                <input type="submit" id="post-submit" />
            </form>
        </section>
    )
}

export default AddPost