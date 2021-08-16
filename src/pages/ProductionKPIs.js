import React from "react";
import { Link } from "react-router-dom";
import { MyLineChart } from "../components/MyLineChart";
import { MyHorizontalBarChart } from "../components/MyHorizontalBarChart";
import VerticalText from "../components/VerticalText";
import HorizontalText from "../components/HorizontalText";

export const ProductionKPIs = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      <Link to="/" style={{
        fontSize: 14,
        position: 'absolute',
        top: 10,
        right: 10,
        color: 'white'
      }}>
        Back to Dashboard
      </Link>
      <div>
        <div
          style={{
            width: 500,
            height: 200,
          }}
        >
          <MyHorizontalBarChart />
        </div>
      </div>
      <div>
        <div
          style={{
            position: "relative",
            width: 500,
            height: 300,
          }}
        >
          <HorizontalText text="Submission-to-bind ratio, rolling 28 days" />
          <VerticalText text="Monthly submission-to-bind ratio" />
          <MyLineChart />
        </div>
        <div
          style={{
            position: "relative",
            width: 500,
            height: 300,
          }}
        >
          <HorizontalText text="Premiums, bind, rolling 28 days" />
          <VerticalText text="Monthly premiums, bind ratio" />
          <MyLineChart />
        </div>
      </div>
    </div>
  );
};
