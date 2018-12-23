import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getPosts, deletePost } from '../../actions/postActions';

import { Link } from 'react-router-dom';


class PostItem extends Component {

  onDeleteClick(id) {
    this.props.deletePost(id);
    console.log(id);
  };

  componentDidMount() {
		this.props.getPosts();
	}

	componentWillReceiveProps(nextprops) {
		if(nextprops.item){
			this.props.items.unshift(nextprops.item);
		}
	}
  render() {

    const PostItem = this.props.items.map(post => (
      <tr key={post.id}>
        <td>{post.title}</td>
        <td>{post.body}</td>
        
        <td>
          <button
            onClick={this.onDeleteClick.bind(this, post.id)}
            className="btn btn-danger"
          >
            Delete
          </button>

          <Link to="/update" className="btn btn-info mt-3">Update</Link>
        </td>
      </tr>
    ));

    return (
      <div>
        <h4 className="mb-4 mt-4">Post Item</h4>
        <table className="table">
          <thead>

            <tr>
              <th>Title</th>
              <th>Body</th>
            </tr>
            {PostItem}
          </thead>
        </table>
      </div>
    );
  }
}

PostItem.propTypes = {
  item: PropTypes.object.isRequired,
  items: PropTypes.array.isRequired,
  getPosts: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
	item:state.post.item,
  items:state.post.items,
});

export default connect(mapStateToProps, {getPosts, deletePost})(PostItem);

