import React from "react";
import { DashboardCard } from "../components/DashboardCard";
import { DashboardTitleCard } from "../components/DashboardTitleCard";

export const SampleDashboard = () => {
  const submissionsRawData = [];
  return (
    <div
      style={{
        display: "flex",
        gridGap: 8,
        flexDirection: "column",
        padding: 16,
      }}
    >
      <div
        style={{
          display: "flex",
          gridGap: 8,
          flexFlow: "wrap",
          margin: "auto",
        }}
      >
        <DashboardTitleCard
          title="Production KPIs"
          pathName="/productionKPIs"
        />
        <DashboardCard
          title="Submissions"
          middleText="860"
          bottomText="959"
          bottomPercentage={-10.32}
          type="warning"
          rawData={submissionsRawData}
        />
        <DashboardCard
          title="Submissions"
          middleText="860"
          bottomText="959"
          bottomPercentage={-10.32}
          type="warning"
          rawData={submissionsRawData}
        />
        <DashboardCard
          title="Submissions"
          middleText="860"
          bottomText="959"
          bottomPercentage={-10.32}
          type="warning"
          rawData={submissionsRawData}
        />
        <DashboardCard
          title="Submissions"
          middleText="860"
          bottomText="959"
          bottomPercentage={-10.32}
          type="warning"
          rawData={submissionsRawData}
        />
      </div>
      <div
        style={{
          display: "flex",
          gridGap: 8,
          flexFlow: "wrap",
          margin: "auto",
        }}
      >
        <DashboardTitleCard title="Claim KPIs" pathName="/claimKPIs" />
        <DashboardCard
          title="Submissions"
          middleText="860"
          bottomText="959"
          bottomPercentage={-10.32}
          type="warning"
          rawData={submissionsRawData}
        />
        <DashboardCard
          title="Submissions"
          middleText="860"
          bottomText="959"
          bottomPercentage={-10.32}
          type="warning"
          rawData={submissionsRawData}
        />
        <DashboardCard
          title="Submissions"
          middleText="860"
          bottomText="959"
          bottomPercentage={-10.32}
          type="warning"
          rawData={submissionsRawData}
        />
        <DashboardCard
          title="Submissions"
          middleText="860"
          bottomText="959"
          bottomPercentage={-10.32}
          type="warning"
          rawData={submissionsRawData}
        />
      </div>
    </div>
  );
};
