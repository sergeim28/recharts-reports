import React from "react";

const VerticalText = ({text}) => {
  return (
    <p
      style={{
        height: "215px",
        position: "absolute",
        bottom: "80px",
        left: "10px",
        margin: 0,
        transform: "rotate(-180deg)",
        fontSize: "18px",
        writingMode: "vertical-rl",
        textOrientation: "mixed",
        textOverflow: "ellipsis",
        overflow: "hidden",
        whiteSpace: "nowrap",
        textAlign: "left"
      }}
    >
      {text}
    </p>
  );
}

export default VerticalText;