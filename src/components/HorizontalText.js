import React from "react";

const HorizontalText = ({ text }) => {
  return (
    <p
      style={{
        position: "absolute",
        top: "-30px",
        left: "20px",
        margin: 0,
        fontSize: "18px",
        textOverflow: "ellipsis",
        overflow: "hidden",
        whiteSpace: "nowrap",
        width: "500px",
        textAlign: "left"
      }}
    >
      {text}
    </p>
  );
}

export default HorizontalText;