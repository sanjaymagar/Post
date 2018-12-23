import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import TextFieldGroup from '../Field/TextFieldGroup';
import {createProfile} from '../../actions/profileAction';
import ShowProfile from './showProfile';

class Profile extends Component {
	constructor(){
		super();
		this.state = {
			name:'',
			username:'',
			email:'',
			phone:'',
			website:''
		}
	this.onChange = this.onChange.bind(this);
	this.onSubmit = this.onSubmit.bind(this);

	};

	


	onChange(e) {
		this.setState({
			[e.target.name]:e.target.value
		});
	};

	onSubmit(e) {
		e.preventDefault();
		const newProfile = {
			name:this.state.name,
			username:this.state.username,
			email:this.state.email,
			phone:this.state.phone,
			website:this.state.website
		};

		this.props.createProfile(newProfile);
	}


	render() {
		return (
			<div className= 'container'>
				<div className= 'row'>
					<div className= 'col-md-8 m-auto'>
						<h3 className= 'display-4 text-center'>Profile</h3>

						<form>
							
							<TextFieldGroup
								name="name"
								value={this.state.name}
								type="string"
								placeholder="Name"
								onChange={this.onChange}
							/>
							<TextFieldGroup
								name="username"
								value={this.state.username}
								type="string"
								placeholder="Username"
								onChange={this.onChange}
							/>
							<TextFieldGroup
								name="email"
								value={this.state.email}
								type="string"
								placeholder="Email Address"
								onChange={this.onChange}
							/>
							
							<TextFieldGroup
								name="phone"
								value={this.state.phone}
								type="number"
								placeholder="Phone"
								onChange={this.onChange}
							/>
							<TextFieldGroup
								name="website"
								value={this.state.website}
								type="string"
								placeholder="Website"
								onChange={this.onChange}
							/>
							

							<input type = "submit" onSubmit = {this.onSubmit} className = "btn btn-info btn-block mb-4" />

						</form>
					</div>
				</div>
				<ShowProfile/>
			</div>
		);
	}
}

Profile.propsTypes = {
	createProfile: PropTypes.func.isRequired,
	profile:PropTypes.object.isRequired,
	profiles:PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
	profile: state.profile.profile,
	profiles: state.profile.profiles
});

export default connect(mapStateToProps, {createProfile})(Profile);