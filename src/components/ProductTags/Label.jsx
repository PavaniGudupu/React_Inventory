import React from "react";

function Label({ text, htmlFor }) {
  return (
    <label className="lbl" htmlFor={htmlFor}>
      {text}
    </label>
  );
}

export default Label;
