import React from "react";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import { connect } from "react-redux";
import { removeComment } from "../../actions/post";
const ComentItem = ({
  removeComment,
  postID,
  comment: { _id, name, text, user, date },
  auth,
}) => {
  return (
    <div>
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
            Posted on <Moment format="YYYY/MM/DD">{date}</Moment>
          </p>
        </div>
        {auth.isAuthenticated && auth.user._id === user && (
          <button
            onClick={() => removeComment(postID, _id)}
            className="btn btn-danger"
          >
            Delete
          </button>
        )}
      </div>
    </div>
  );
};

const mapPropsToState = (state) => ({
  auth: state.auth,
});

export default connect(mapPropsToState, { removeComment })(ComentItem);
