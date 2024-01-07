import React from "react";

const TaskList = (props) => {
  return (
    <div className="list">
      <span>
     { props.completed ? <></> : 
      <input type="checkbox" name="list" />
}
      <span>{props.list}</span>
      </span>
      <p>...</p>
    </div>
  );
};

export default TaskList;
