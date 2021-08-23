import React from "react";
import { colors } from "../utils/constants";
import { MyAreaChart } from "./MyAreaChart";

const styles = {
  root: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
    padding: "16px",
    boxShadow: "5px 5px 5px black",
    borderRadius: 5,
    width: 300,
    height: 180,
  },
  title: {
    fontSize: 16,
    color: "black",
    fontWeight: 500,
    textAlign: "left",
  },
  middleContainer: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    height: "100%",
  },
  middleText: {
    fontSize: 64,
    fontWeight: 600,
    marginTop: "auto",
    zIndex: 1,
    textAlign: "center",
  },
  bottomText: {
    fontSize: 16,
    color: "black",
    fontWeight: 500,
    zIndex: 1,
    marginBottom: 8,
    textAlign: "center",
  },
  areaChart: {
    width: "100%",
    height: "100%",
    position: "absolute",
    bottom: 0,
    zIndex: 0,
  }
}

export const DashboardCard = ({
  title,
  middleText,
  bottomText,
  bottomPercentage,
  type,
}) => {
  const middleTextColor =
    type === "warning" ? colors.darkPink : colors.darkGreen;
  const graphColor =
    type === "warning" ? colors.lightPink : colors.lightGreen;

  return (
    <div style={styles.root}>
      <span style={styles.title}>
        {title}
      </span>
      <div style={styles.middleContainer}>
        <span style={{ 
          ...styles.middleText, 
          color: middleTextColor,
        }}>
          {middleText}
        </span>
        <span style={styles.bottomText}>
          Prev. month: {bottomText} ({bottomPercentage}%)
        </span>
        <div style={styles.areaChart}>
          <MyAreaChart color={graphColor}/>
        </div>
      </div>
    </div>
  );
};
