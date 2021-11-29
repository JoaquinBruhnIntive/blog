import firebaseApp from '../../../credentials';
import { getFirestore, updateDoc, doc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

import './addPost.css'

const firestore = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

const AddPost = ({globalUser, postList, setPostList}) => {

    async function formHandler(e){
        e.preventDefault()
        
        let imgUrl
        if(e.target.newPostImg.files[0] !== undefined){
            const imgFile = e.target.newPostImg.files[0];
            
            const archivoRef = ref(storage, `postImgs/${imgFile.name}`);
            
            await uploadBytes(archivoRef, imgFile);
            
            imgUrl = await getDownloadURL(archivoRef);
        } else {
            imgUrl = "http://atrilco.com/wp-content/uploads/2017/11/ef3-placeholder-image.jpg";
        }
        
        const authorEmail = globalUser.email;
        const uid = globalUser.uid;
        const title = e.target.newPostTitle.value;
        const img = imgUrl;
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
        e.target.newPostImg.value = "";
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
                    <input type="file" name="newPostImg" id="newPostImg" placeholder="add and image" accept="image/*" />
                    <input type="date" name="date" id="newPostDate" required ></input>
                    <div>
                        <input type="text" name="tag1" id="newPostTag1" placeholder="first tag" pattern="[\S]{3,12}" maxLength="12" title="this field only alowns between 3 to 12 characters and doesn´t allow any white paces " required/>
                        <input type="text" name="tag2" id="newPostTag2" placeholder="second tag" pattern="[\S]{3,12}" maxLength="12" title="this field only alowns between 3 to 12 characters and doesn´t allow any white paces " />
                    </div>
                    <input type="submit" id="post-submit" />
                </form>
            }
        </section>
    )
}

export default AddPost