import axios from 'axios';

import {
  ADD_POST,
  GET_POST,
  GET_POSTS,
  DELETE_POST
} from '../actions/types';


// Add post
export const addPost = newPost => dispatch => {
  axios
    .post('https://jsonplaceholder.typicode.com/posts', newPost)
    .then(res => 
      dispatch({
        type:ADD_POST,
        payload:res.data
      })
    )
};


// Get single post
export const getPost = id => dispatch => {
  axios
    .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(res => 
      dispatch({
        type:GET_POST,
        payload:res.data
      })      
    )
};

// Get all post
export const getPosts = () => dispatch => {
  axios
    .get('https://jsonplaceholder.typicode.com/posts')
    .then(res =>
      dispatch({
        type:GET_POSTS,
        payload:res.data
      })
    )
};

// Delete post with id
export const deletePost = id => dispatch => {
  axios
    .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(res => 
      dispatch({
        type:DELETE_POST,
        payload:res.data
      })
    )
};



