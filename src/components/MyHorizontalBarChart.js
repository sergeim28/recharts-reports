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
import { numberToMoneyString } from "../utils/helper";
import { MyTooltip } from "./MyTooltip";

const data = [
  {
    name: "Submission",
    spend: 1100,
    pv: 0,
    amt: 0,
  },
  {
    name: "Quote",
    spend: 900,
    pv: 100,
    amt: 100,
  },
  {
    name: "Bind",
    spend: 500,
    pv: 300,
    amt: 300,
  },
];

const renderCustomizedLabel = (props) => {
  const { content, value, ...rest } = props;

  return <Label {...rest} value={'$' + numberToMoneyString(value)} fontSize="12" fill="#FFFFFF" fontWeight="bold" />;
};

export const MyHorizontalBarChart = () => {
  return (
    <ResponsiveContainer width="99%" aspect={3}  debounce={1}>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 0,
          right: 30,
          left: 0,
          bottom: 30,
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
        <Tooltip cursor={{ fill: "#FFFFFF30" }} content={<MyTooltip color="#82ca9d" overrideParams={["spend"]} />} />
        <Bar dataKey="pv" stackId="a" fill="transparent " />
        <Bar dataKey="spend" stackId="a" fill="#82ca9d">
          <LabelList
            dataKey="spend"
            position="center"
            content={renderCustomizedLabel}
          />
        </Bar>
        <Bar dataKey="amt" stackId="a" fill="transparent " />
      </BarChart>
    </ResponsiveContainer>
  );
};
