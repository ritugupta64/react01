import React from "react";

const InputBox = ({ type, name, id, value, onChange }) => {
  return (
    <input type={type} name={name} id={id} value={value} onChange={onChange} />
  );
};

InputBox.defaultProps = {
  type: "",
  name: "",
  id: "",
  value: "",
  onChange: () => {},
};

export default InputBox;
