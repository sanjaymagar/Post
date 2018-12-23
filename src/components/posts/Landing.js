import React from 'react';
import Post from './Post';
import PostItem from './PostItem';

const Landing = (props) => {
  return (
    <div className = 'landing'>
    	<Post/>
    	<PostItem/>
    </div>
  )
}

export default Landing;