import firebaseApp from '../../../credentials';
import { getFirestore, updateDoc, doc } from "firebase/firestore";

import './addPost.css'

const firestore = getFirestore(firebaseApp);

const AddPost = ({globalUser, postList, setPostList}) => {

    //mandar la info de los parametros al padre por los estados

    // function crearPost(e){
    //     e.preventDefault()
    //     console.log("post creado")
    //     newArray = postList.push 
    //     setPostList(newArray)
    // }

    async function formHandler(e){
        e.preventDefault()

        
        const authorEmail = globalUser.email;
        const uid = globalUser.uid;
        const title = e.target.newPostTitle.value;
        const img = "http://atrilco.com/wp-content/uploads/2017/11/ef3-placeholder-image.jpg";
        const content = e.target.newPostArticle.value;
        const date = e.target.newPostDate.value;
        const tag1 = e.target.newPostTag1.value;
        const tag2 = e.target.newPostTag2.value;

        const newPostList = [
            ...postList,
            {
                authorEmail:authorEmail,
                id: +new Date(), 
                uid:uid,
                title:title,
                img:img,
                content:content,
                date:date,
                tag1:tag1,
                tag2:tag2
            }
        ];

        const docuRef = doc(firestore, "posts/postList");
        await updateDoc(docuRef, { firebaseList: [...newPostList] });

        setPostList(newPostList);
        
        e.target.newPostTitle.value = "";
        e.target.newPostArticle.value = "";
        e.target.newPostDate.value = "";
        e.target.newPostTag1.value = "";
        e.target.newPostTag2.value = "";
        
    }

    return(
        <section className="add-post">
            { globalUser==null ?
                <h2>Please log in</h2>
                :
                <form onSubmit={formHandler} >
                    <h2>Create your article</h2>
                    <input type="text" name="title" id="newPostTitle" placeholder="Title" maxLength="20" required/>
                    <textarea name="article" id="newPostArticle" placeholder="Article" maxLength="300" required></textarea>
                    <input type="date" name="date" id="newPostDate" required ></input>
                    <div>
                        <input type="text" name="tag1" id="newPostTag1" placeholder="first tag" maxLength="12" required/>
                        <input type="text" name="tag2" id="newPostTag2" placeholder="second tag" maxLength="12" />
                    </div>
                    <input type="submit" id="post-submit" />
                </form>
            }
        </section>
    )
}

export default AddPost