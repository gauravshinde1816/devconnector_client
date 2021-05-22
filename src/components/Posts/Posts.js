import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import PostItem from "./PostItem";
import PostForm from "./PostForm";
import { getPosts } from "../../actions/post";
const Posts = ({ post: { posts }, getPosts }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);
  return (
    <div>
      <h1 className="large text-primary">Posts</h1>
      <h2 className="lead">
        <i className="fa fa-user"></i> Welcome to the community
      </h2>
      <PostForm />
      {posts !== null && posts.length > 0 ? (
        <Fragment>
          {posts.map((post) => (
            <PostItem key={post._id} post={post} />
          ))}
        </Fragment>
      ) : (
        "No Post Found"
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { getPosts })(Posts);
