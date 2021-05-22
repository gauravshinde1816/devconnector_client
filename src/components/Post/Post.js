import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import PostItem from "../Posts/PostItem";
import CommentForm from "./CommentForm";
import CommentItem from "./ComentItem";
import { getPost } from "../../actions/post";

const Post = ({ getPost, match, post: { post } }) => {
  useEffect(() => {
    getPost(match.params.id);
  }, [getPost]);
  return (
    <div>
      {post !== null && (
        <Fragment>
          <PostItem post={post} showActions={false} />
          <CommentForm postID={post._id} />
          {post.comments.map((comment) => (
            <CommentItem
              key={comment._id}
              comment={comment}
              postID={post._id}
            />
          ))}
        </Fragment>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { getPost })(Post);
