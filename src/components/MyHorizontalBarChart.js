import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Label,
  LabelList,
  ResponsiveContainer,
} from "recharts";
import { tickStyle } from "../utils/constants";
import { MyTooltip } from "./MyTooltip";

const data = [
  {
    name: "Page A",
    uv: 100,
    pv: 0,
    amt: 0,
  },
  {
    name: "Page B",
    uv: 80,
    pv: 10,
    amt: 10,
  },
  {
    name: "Page C",
    uv: 60,
    pv: 20,
    amt: 20,
  },
];

const renderCustomizedLabel = (props) => {
  const { content, ...rest } = props;

  return <Label {...rest} fontSize="12" fill="#FFFFFF" fontWeight="Bold" />;
};

export const MyHorizontalBarChart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        layout="vertical"
      >
        <XAxis type="number" tick={tickStyle} />
        <YAxis
          type="category"
          width={150}
          padding={{ left: 20 }}
          dataKey="name"
          tick={tickStyle}
          axisLine={false}
        />
        <Tooltip cursor={{ fill: "#FFFFFF30" }} content={<MyTooltip color="#82ca9d" />} />
        <Bar dataKey="pv" stackId="a" fill="transparent " />
        <Bar dataKey="uv" stackId="a" fill="#82ca9d">
          <LabelList
            dataKey="pv"
            position="center"
            content={renderCustomizedLabel}
          />
        </Bar>
        <Bar dataKey="amt" stackId="a" fill="transparent " />
      </BarChart>
    </ResponsiveContainer>
  );
};
