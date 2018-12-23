import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {getProfiles} from '../../actions/profileAction';



class ShowProfile extends Component {


	componentDidMount() {
		this.props.getProfiles();	
	}

	componentWillReceiveProps(nextProps) {
		if(nextProps.profile) {
			this.props.profiles.unshift(nextProps.profile);
		}
	}

	onDeleteClick(){

	}

	render() {

	
		const Profile = this.props.profiles.map(item => (
			<tr key = {item.id}>
				<td>{item.name}</td>
				<td>{item.username}</td>
				<td>{item.email}</td>
				<td>{item.phone}</td>
				<td>{item.website}</td>

				<td>
				  <button
				    onClick={this.onDeleteClick.bind(this, item.id)}
				    className="btn btn-danger"
				  >
			    Delete
				</button>
				</td>

			</tr>
		));

		return (
			<div className = "container">
				<table className = "table">
					<thead>
						<tr className = "">
							<th>Name</th>
							<th>Username</th>
							<th>Email Address</th>
							<th>Phone</th>
							<th>Website</th>
							<th>Action</th>

						</tr>

						{Profile}

					</thead>
				</table>
				
			</div>				
		);
	}
}

ShowProfile.propTypes = {
	profile:PropTypes.object.isRequired,
	profiles:PropTypes.array.isRequired,
	getProfiles:PropTypes.func.isRequired
}

const mapStateToProps = state => ({
	profile: state.profile.profile,
	profiles: state.profile.profiles
});

export default connect(mapStateToProps, {getProfiles})(ShowProfile);