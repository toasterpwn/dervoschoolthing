import React from "react";
import { useParams } from "react-router-dom";

const Redirect = (props) => {
  let { id } = useParams();
  console.log(id);
  window.location = `http://localhost:5000/url/${id}`;
  return <div>Redirecting...</div>;
};

export default Redirect;
