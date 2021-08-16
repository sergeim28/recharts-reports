import React from "react";
import { MyLineChart } from "../components/MyLineChart";
import HorizontalText from "../components/HorizontalText";

export const ClaimKPIs = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      <div>
        <div
          style={{
            position: "relative",
            width: 500,
            height: 300,
          }}
        >
          <HorizontalText text="Claims ratio, rolling 28 days" />
          <MyLineChart />
        </div>
        <div
          style={{
            position: "relative",
            width: 500,
            height: 300,
          }}
        >
          <HorizontalText text="Payout ratio (paid claims to bind premiums)" />
          <MyLineChart />
        </div>
      </div>
    </div>
  );
};
