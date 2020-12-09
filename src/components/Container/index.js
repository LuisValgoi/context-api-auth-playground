import React from "react";

const style = {
  container: {
    backgroundColor: "green",
    padding: "1rem",
  },
};

const Container = (props) => {
  return <div style={style.container}>{props.children}</div>;
};

export default Container;
