import React from "react";

function Input({
  inputType = "text",
  inputHolder = "",
  name,
  value,
  onChange,
  id,
  className = "inp small",
  ...rest
}) {
  return (
    <input
      type={inputType}
      placeholder={inputHolder}
      name={name}
      id={id}
      value={value ?? ""}
      onChange={onChange}
      className={className}
      {...rest}
    />
  );
}

export default Input;
