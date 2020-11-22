import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Home extends Component {
  render () {
    console.log(this.props);
    const { posts } = this.props;
    const postList = posts.length ? (
      posts.map(post => {
        return (
          <div className="post card" key={post.id}>
            <div className="card-content">
              <Link to={'/posts/' + post.id}>
                <span className="card-title">{post.title}</span>
              </Link>
              <p>{post.body}</p>
            </div>
          </div>
        );
      })
    ) : (
      <div className="center">No Data</div>
    );
    return (
      <div className="container">
        {postList}
      </div>
    );
  }
}

const mapStateToProps = (state) =>  {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps)(Home);