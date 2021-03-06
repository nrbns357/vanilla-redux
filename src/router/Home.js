import React, { useState } from "react";
import {connect} from "react-redux";

const Home = ({toDos}) => {
  const [text, setText] = useState("");
  const onChange = (e) => {
    setText(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setText("");
  };
  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>{JSON.stringify(toDos)}</ul>
    </>
  );
};

function mapStateToProps(state) {
    return { toDos: state };
  }
  
  export default connect(mapStateToProps)(Home);
