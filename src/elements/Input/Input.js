import React from "react";

export const Input = ({ handleChange, name, value, ...props }) => {
  return (
    <input
      type="text"
      id={name}
      name={name}
      onChange={handleChange}
      defaultValue={value}
      {...props}
    />
  );
};
