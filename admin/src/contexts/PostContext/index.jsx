import { createContext, useReducer, useState } from "react";
import axios from "axios";
import api from "../../api";
import { postReducer } from "../../reducers/PostReducer";

//Tạo PostsContext để lưu trữ các post.
export const PostContext = createContext();

const PostContextProvider = ({ children }) => {
  //Khỏi tạo reducer
  const [postState, dispatch] = useReducer(postReducer, {
    post: null,
    isLoading: true,
    posts: [],
  });

  const [showAddModal, setShowAddModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [toast, setToast] = useState({
    show: false,
    type: null,
    message: "",
  });
  const getPosts = async () => {
    try {
      const res = await axios.get(`${api}/post/`);
      console.log(res);
      if (res.data.success) {
        dispatch({
          type: "SET_POSTS",
          payload: res.data.posts,
        });
      } else {
      }
    } catch (error) {
      return { success: false, message: error.message };
    }
  };

  const createPost = async (newPost) => {
    try {
      const res = await axios.post(`${api}/post/create`, newPost);
      console.log(1);
      if (res.data.success) {
        dispatch({
          type: "CREATE_POST",
          payload: res.data.post,
        });
      }
      return res.data;
    } catch (error) {
      return { success: false, message: error.message };
    }
  };
  const deletePost = async (postId) => {
    try {
      const res = await axios.delete(`${api}/post/delete/${postId}`);
      console.log(res);
      if (res.data.success) {
        dispatch({
          type: "DELETE_POST",
          payload: postId,
        });
      }
      return res.data;
    } catch (error) {
      return error.res.data
        ? error.res.data
        : { success: false, message: error.message };
    }
  };

  const updatePost = async (postId, postUpdate) => {
    try {
      const res = await axios.put(`${api}/post/update/${postId}`, postUpdate);
      if (res.data.success) {
        dispatch({
          type: "UPDATE_POST",
          payload: res.data.post,
        });
      }
      return res.data;
    } catch (error) {
      return error.res.data
        ? error.res.data
        : { success: false, message: error.message };
    }
  };

  const findPost = (postId) => {
    console.log(postId);
    const post = postState.posts.find((post) => post._id === postId);
    console.log("post:", post);
    dispatch({ type: "GET_POST", payload: post });
  };
  const postContextData = {
    postState,
    getPosts,
    setShowAddModal,
    showAddModal,
    createPost,
    toast,
    setToast,
    deletePost,
    updatePost,
    showUpdateModal,
    setShowUpdateModal,
    findPost,
  };
  return (
    <PostContext.Provider value={postContextData}>
      {children}
    </PostContext.Provider>
  );
};

export default PostContextProvider;
