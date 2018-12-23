import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import './App.css';
import Post from './components/posts/Post';
import PostItem from './components/posts/PostItem';
import PostUpdate from './components/posts/Update';
import Landing from './components/posts/Landing';


import Profile from './components/users/Profile';
import ShowProfile from './components/users/showProfile';


import store from './store';

class App extends Component {
  render() {
    return (

    	<Provider store = {store}>
    		<BrowserRouter>
	        <div className = "App">
	          <Route 
              exact 
              path="/profile" 
              component = {Profile} 
            />
            <Route 
              exact 
              path="/profiles" 
              component = {ShowProfile} 
            />


            <Route
              exact
              path="/update"
              component={PostUpdate}
            />
            <Route 
              exact 
              path="/post" 
              component = {Post} 
            />
            <Route 
              exact 
              path="/posts" 
              component = {PostItem} 
            />
             <Route 
              exact 
              path="/" 
              component = {Landing} 
            />
            
            
	        </div>
	      </BrowserRouter>
    	</Provider>
    );
  }
}

export default App;
