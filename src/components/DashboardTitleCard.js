import React from "react";
import { useHistory } from "react-router-dom";

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
    cursor: "pointer",
  },
  title: {
    margin: "auto",
    textAlign: "center",
    color: "black",
    fontSize: 24,
  }
}

export const DashboardTitleCard = ({ title, pathName }) => {
  const history = useHistory();
  return (
    <div
      style={styles.root}
      onClick={() => history.push(pathName)}
    >
      <span style={styles.title}>
        {title}
      </span>
    </div>
  );
};
