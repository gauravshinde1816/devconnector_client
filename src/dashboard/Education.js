import React from "react";
import Moment from "react-moment";
import { connect } from "react-redux";
import { deleteEducation } from "../actions/profile";
const Education = ({ education, deleteEducation }) => {
  const educations = education.map((edu) => (
    <tr key={edu._id}>
      <td>{edu.school}</td>
      <td>{edu.degree}</td>
      <td>
        <Moment format="YYYY/MM/DD">{edu.from}</Moment> -
        {edu.to !== null ? (
          <Moment format="YYYY/MM/DD">{edu.to}</Moment>
        ) : (
          "Now"
        )}
      </td>
      <td>
        <div
          style={{ cursor: "pointer" }}
          onClick={() => deleteEducation(edu._id)}
        >
          <i className="fa fa-trash text-danger" aria-hidden="true"></i>
        </div>
      </td>
    </tr>
  ));
  return (
    <div>
      <h2 className="my-2 text-primary">Education Credentials</h2>
      <table className="table">
        <thead>
          <tr>
            <th className="text-center">School</th>
            <th className="hide-sm">Degree</th>
            <th className="hide-sm">Years</th>
            <th />
          </tr>
        </thead>

        <tbody>{educations}</tbody>
      </table>
    </div>
  );
};

export default connect(null, { deleteEducation })(Education);
