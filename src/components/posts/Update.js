import React, { Component } from 'react';
import TextFieldGroup from '../Field/TextFieldGroup';
import {getPost} from '../../actions/postActions';
import PropsTypes from 'prop-types';
import {connect} from 'react-redux';
import isEmpty from '../../validation/is-Empty';

class PostUpdate extends Component {

	constructor(){
		super();
		this.state = {
			title:'',
			body:''
		}
	this.onChange = this.onChange.bind(this);
	this.onSubmit = this.onSubmit.bind(this);	
	}
	componentDidMount() {
    	this.props.getPost();
  	}

	componentWillReceiveProps(nextProps) {
		if(nextProps.post){
			const post = nextProps.post;

			// If post is empty
			post.title = !isEmpty(post.title) ? post.title : '';
			post.body = !isEmpty(post.body) ? post.body : '';

		}

		// Set componetn fields state
		this.setState({
			title:this.state.title,
			body:this.state.body
		});

	}



	onChange(e) {
		this.setState({[e.target.name]:e.target.value});
	}

	onSubmit(e) {
		e.preventDefault();

		const newPost = {
			title:this.state.title,
			body:this.state.body
		};
		this.props.addPost(newPost);
	}

	render() {
		return (
			<div className = 'post'>
				<div className = 'container'>
					<div className = 'row'>
						<div className = 'col-md-8 m-auto'>
							<h2 className='display-4 text-center'>Update Post</h2>
							<form onSubmit = {this.onSubmit}>

								<TextFieldGroup
									name = "title"
									type = "text"
									placeholder = "Title"
									value = {this.state.title}
									onChange = {this.onChange}
								/>



								<TextFieldGroup
									name = 'body'
									type= 'string'
									value = {this.state.body}
									placeholder = "Body"
									onChange = {this.onChange}
								/>
								<input type = "submit" value = "Submit" className = "btn btn-info btn-block mt-4"/>

							</form>
						</div>
					</div>
				</div>
				
			</div>
		);
	}
}

PostUpdate.propsTypes = {
	post:PropsTypes.object.isRequired,
	getPost:PropsTypes.func.isRequired,

}


const mapStateToProps = state => ({
	post: state.post
});

export default connect(mapStateToProps, {getPost})(PostUpdate);