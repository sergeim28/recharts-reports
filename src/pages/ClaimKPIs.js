import React from "react";
import { Link } from "react-router-dom";
import { MyLineChart } from "../components/MyLineChart";
import HorizontalText from "../components/HorizontalText";

const styles = {
  root: {
    display: "flex",
    flexDirection: "row",
  },
  topLink: {
    fontSize: 14,
    position: 'absolute',
    top: 10,
    right: 10,
    color: 'white'
  },
  horizontalTextContainer: {
    position: "relative",
    width: 500,
    height: 300,
  }
}

export const ClaimKPIs = () => {
  const filters = {
    all: true,
    broker: false,
    direct: false,
  }
  return (
    <div style={styles.root}>
      <Link to="/" style={styles.topLink}>
        Back to Dashboard
      </Link>
      <div>
        <div style={styles.horizontalTextContainer}>
          <HorizontalText text="Claims ratio, rolling 28 days" />
          <MyLineChart symbol='$' dataKey="spend" filters={filters} />
        </div>
        <div style={styles.horizontalTextContainer}>
          <HorizontalText text="Payout ratio (paid claims to bind premiums)" />
          <MyLineChart symbol='%' dataKey="percentage" filters={filters} />
        </div>
      </div>
    </div>
  );
};
