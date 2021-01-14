import React from "react";

const Button = ({ type, name, id, value, children, onClick }) => {
  return (
    <button 
       type={type} 
       name={name} 
       id={id} 
       value={value} 
       onClick={onClick}>
      {children}
    </button>
  );
};


Button.defaultProps = {
  name: "",
  type: "",
  id: "",
  value: "",
  onClick: () => {},
  children: "",
};

export default Button;
