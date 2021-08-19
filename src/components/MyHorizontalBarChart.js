import React, { useEffect, useState } from "react";
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
import { productionReportRawMetrics } from "../utils/mockData";
import { MyTooltip } from "./MyTooltip";

const funnelKeys = {
  "submission": "Submission", 
  "quote": "Quote", 
  "bind": "Bind"
}

const renderCustomizedLabel = (props) => {
  const { content, value, ...rest } = props;

  return <Label {...rest} value={'$' + numberToMoneyString(value)} fontSize="12" fill="#FFFFFF" fontWeight="bold" />;
};

export const MyHorizontalBarChart = ({ filters }) => {
  const [parsedData, setParsedData] = useState([]);

  useEffect(() => {
    const parsedObject = {}
    productionReportRawMetrics.forEach(item => {
      if (filters[item.source] || filters["all"])
        parsedObject[item.funnel] = (parsedObject[item.funnel] || 0) + item.spend
    })
    const parsedArray =(Object.entries(parsedObject).map(([key, value]) => {
      return {
        name: funnelKeys[key],
        spend: value
      }
    }))

    let MAX = -1;
    parsedArray.forEach(({ spend }) => {
      if (MAX < spend) MAX = spend
    })
    setParsedData(parsedArray.map((item) => ({
      ...item,
      firstSpace: (MAX-item.spend)/2,
      secondSpace: (MAX-item.spend)/2,
    })))
  }, [filters])
  
  return (
    <ResponsiveContainer width="99%" aspect={3}  debounce={1}>
      <BarChart
        width={500}
        height={300}
        data={parsedData}
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
        <Bar dataKey="firstSpace" stackId="a" fill="transparent " />
        <Bar dataKey="spend" stackId="a" fill="#82ca9d" minPointSize={5}>
          <LabelList
            dataKey="spend"
            position="center"
            content={renderCustomizedLabel}
          />
        </Bar>
        <Bar dataKey="secondSpace" stackId="a" fill="transparent " />
      </BarChart>
    </ResponsiveContainer>
  );
};
