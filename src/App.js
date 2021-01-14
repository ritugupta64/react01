import React, { useState } from "react";
import "./App.css";
import InputBox from "./components/atoms/InputBox/InputBox";
import Button from "./components/atoms/Button/Button";
import List from "./components/molecules/List/List";

const App = () => {
  const [name, setName] = useState({
    title: "",
    description: "",
  });

  const [val, setVal] = useState([]);

  const inputChange = (event) => {
    const { name, value } = event.target;
    setName((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const addValue = (e) => {
    e.preventDefault();
    setVal((preValue) => {
      return [...preValue, name];
    });
    setName({
      title: "",
      description: "",
    });
  };

  const deleteValue = (id) => {
    setVal((prev) => {
      return prev?.filter((itm, indx) => {
        return indx !== id;
      });
    });
  };

  return (
    <div className="App">
      <InputBox
        name="title"
        value={name.title}
        id="title"
        type="text"
        onChange={inputChange}
      />
      <br />
      <textarea
        name="description"
        value={name.description}
        onChange={inputChange}
      />
      <Button type="button" onClick={addValue}>
        Submit
      </Button>

      <List item={val} onDelete={deleteValue} />
    </div>
  );
};

export default App;
