import React from "react";
import Moment from "react-moment";
import { connect } from "react-redux";
import { deleteExperience } from "../actions/profile";
const Experience = ({ experience, deleteExperience }) => {
  const experiences = experience.map((exp) => (
    <tr key={exp._id}>
      <td>{exp.company}</td>
      <td>{exp.title}</td>
      <td>
        <Moment format="YYYY/MM/DD">{exp.from}</Moment> -
        {exp.to !== null ? (
          <Moment format="YYYY/MM/DD">{exp.to}</Moment>
        ) : (
          "Now"
        )}
      </td>
      <td>
        <div
          style={{ cursor: "pointer" }}
          onClick={() => deleteExperience(exp._id)}
        >
          <i className="fa fa-trash text-danger" aria-hidden="true"></i>
        </div>
        {/* <button className="btn-danger">Delete</button> */}
      </td>
    </tr>
  ));
  return (
    <div>
      <h2 className="my-2 text-primary">Experience Credentials</h2>
      <table className="table">
        <thead>
          <tr>
            <th className="text-center">Company</th>
            <th className="hide-sm text-center">Title</th>
            <th className="hide-sm  text-center">Years</th>
            <th />
          </tr>
        </thead>

        <tbody>{experiences}</tbody>
      </table>
    </div>
  );
};

export default connect(null, { deleteExperience })(Experience);
