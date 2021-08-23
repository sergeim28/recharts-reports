import React from "react";

const styles = {
  root: {
    margin: 0,
    marginLeft: 30,
    fontSize: 18,
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textAlign: "center"
  }
}

const HorizontalText = ({ text }) => {
  return (
    <p style={styles.root}>
      {text}
    </p>
  );
}

export default HorizontalText;