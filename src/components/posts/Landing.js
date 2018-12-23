import React from 'react';
import Post from './Post';
import PostItem from './PostItem';
import {Link} from 'react-router-dom';

const Landing = () => {
  return (
    <div className = 'landing'>
    	<Post/>
    	<PostItem/>


    </div>

  )
}

export default Landing;