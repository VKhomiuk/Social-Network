import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return{
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
        lang: state.headerState.lang
    };
};

let mapDispatchToProps = (dispatch) => {
    return{
        updateNewPostText: (newText) => {
            dispatch(updateNewPostTextActionCreator(newText));
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        },
    };
};

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostContainer;
