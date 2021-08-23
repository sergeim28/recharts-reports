import React from "react";
import { numberToMoneyString } from "../utils/helper";

const styles = {
  root: {
    background: "white",
    boxShadow: "0px 8px 20px rgba(19, 20, 32, 0.25)",
    borderRadius: 4,
    padding: "0.3rem 0.8rem",
  },
  labelContainer: { 
    display: "flex", 
    alignItems: "center" 
  },
  line: {
    width: "10px", 
    height: "10px",
    marginRight: "10px"
  },
  labelValue: {
    margin: "0px", 
    color: "black", 
    fontSize: 16
  }
}

const MyTooltipRow = ({ value, label, color }) => {
  return (
    <div style={styles.labelContainer}>
      <div style={{ backgroundColor: color, ...styles.line }} />
      <p style={styles.labelValue}>
        {label}: <b>{value}</b>
      </p>
    </div>
  );
};

export const MyTooltip = (props) => {
  const { active, payload, label, color, overrideParams } = props;
  if (!payload) return null;

  const filteredPayload = overrideParams ? payload.filter(item => {
    return overrideParams.includes(item.name)
  }) : payload;


  if (active) {
    let rows = filteredPayload.map((item, index) => {
      const parsedValue = item.name === 'spend' ? '$' + numberToMoneyString(item.value) : item.value + '%'
      return (
        <MyTooltipRow
          key={`${index}-tooltip-item`}
          label={label}
          color={color}
          value={parsedValue}
        />
      );
    });

    return (
      <div style={styles.root}>
        {rows}
      </div>
    );
  }

  return null;
};
