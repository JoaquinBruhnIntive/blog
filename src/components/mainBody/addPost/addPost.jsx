import firebaseApp from '../../../credentials';
import { getFirestore, updateDoc, doc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

import './addPost.css'

const firestore = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

const AddPost = ({globalUser, postList, setPostList}) => {
    //Function that loads the img file into the DB´s storage and uploads the post into firebase
    async function formHandler(e){
        e.preventDefault()
        
        let imgUrl
        //Detects if the file input is empty. 
        //If it has a file, uploads it and sets the URL as a constat that is going to be set as the "img" property.
        //If it doesn´t, it sets a preexisting placeholder as the img
        if(e.target.newPostImg.files[0] !== undefined){
            const imgFile = e.target.newPostImg.files[0];
            
            const archivoRef = ref(storage, `postImgs/${imgFile.name}`);
            
            await uploadBytes(archivoRef, imgFile);
            
            imgUrl = await getDownloadURL(archivoRef);
        } else {
            imgUrl = "http://atrilco.com/wp-content/uploads/2017/11/ef3-placeholder-image.jpg";
        }
        
        //takes the values from the form
        const authorEmail = globalUser.email;
        const uid = globalUser.uid;
        const title = e.target.newPostTitle.value;
        const img = imgUrl;
        const content = e.target.newPostArticle.value;
        const date = e.target.newPostDate.value;
        const tag1 = e.target.newPostTag1.value;
        const tag2 = e.target.newPostTag2.value;
        
        //Creates the new post as an object and adds it to the array(postList) with all other existing post
        const newPostList = [
            ...postList,
            {
                authorEmail:authorEmail,
                //Uses the specific time frame of the post creation to give it an ID
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

        //uploads the new array with the added Post to Firebase
        const docuRef = doc(firestore, "posts/postList");
        await updateDoc(docuRef, { firebaseList: [...newPostList] });

        //updates the array localy
        setPostList(newPostList);
        
        //resets the form inputs back to blank
        e.target.newPostTitle.value = "";
        e.target.newPostArticle.value = "";
        e.target.newPostImg.value = "";
        e.target.newPostDate.value = "";
        e.target.newPostTag1.value = "";
        e.target.newPostTag2.value = "";
        
    }

    return(
        <section className="add-post">
            {/* The interaction to create posts is only avaliable to logged in users so it checks if there is one logged or not */}
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