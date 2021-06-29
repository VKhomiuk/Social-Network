import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

    let newPostElement = React.createRef();

    let postsElements = props.posts.map(p => <Post lang={props.lang} id={p.id} message={p.message} key={p.id} likes={p.likesCounter}/>);


    let onAddPost = () => {
        props.addPost()
    }

    let onPostChange = () => {
        let newText = newPostElement.current.value;
        props.updateNewPostText(newText)
    }

    return (
        <div className={s.myPosts}>
            <div className={s.input__wrapper}>
                <textarea className={s.inputForm} onChange={onPostChange}
                          placeholder={props.lang === 'eng' ? 'Enter your message' : 'Введите сообщение'}
                          ref={newPostElement}
                          // id=$'userPost'
                          value={props.newPostText}/>
                <button className={s.input__submit} onClick={onAddPost}>+</button>
            </div>
            <div>
                {postsElements.reverse()}
            </div>
        </div>
    )
}

// $("userPost").keypress(function (e) {
//     if(e.which === 13 && !e.shiftKey) {
//         $(this).closest("form").submit();
//         e.preventDefault();
//     }
// });


export default MyPosts;
