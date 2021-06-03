import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import { addLike, removeLike, deletePost } from "../../actions/post";
const PostItem = ({
  auth,
  post: { _id, text, likes, comments, date, user, name },
  addLike,
  removeLike,
  deletePost,
  showActions,
}) => {
  const [liked, setLiked] = useState(false);
  // const [disliked, setDisliked] = useState(false);

  const onAddClick = () => {
    setLiked(true);
    addLike(_id);
  };

  const onAddDislike = () => {
    setLiked(false);
    removeLike(_id);
  };
  return (
    <div className="post bg-white p-1 my-1">
      <div>
        <Link to={`/profiles/${user}`}>
          <img
            className="round-img"
            src={`https://ui-avatars.com/api/?name=${name}&background=0D8ABC&color=fff`}
            alt=""
          />
          <h4>{name}</h4>
        </Link>
      </div>
      <div>
        <p className="my-1">{text}</p>
        <p className="post-date">
          Posted on <Moment format={"YYYY/MM/DD"}>{date}</Moment>
        </p>
        {showActions && (
          <Fragment>
            <button
              type="button"
              className="btn btn-light"
              onClick={onAddClick}
            >
              <i
                className={`fas fa-thumbs-up ${
                  liked ? "text-danger" : "text-light"
                }`}
              ></i>{" "}
              {likes.length > 0 && <span>{likes.length}</span>}
            </button>
            <button
              type="button"
              className="btn btn-light"
              onClick={onAddDislike}
            >
              <i className="fas fa-thumbs-down"></i>
            </button>
            <Link to={`/posts/${_id}`} className="btn btn-primary">
              Discussion
              {comments.length > 0 && (
                <span className="comment-count">{comments.length}</span>
              )}
            </Link>
            {auth.user._id === user && (
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => deletePost(_id)}
              >
                <i className="fas fa-times"></i>
              </button>
            )}
          </Fragment>
        )}
      </div>
    </div>
  );
};

PostItem.defaultProps = {
  showActions: true,
};

const mapStateProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateProps, { addLike, removeLike, deletePost })(
  PostItem
);
