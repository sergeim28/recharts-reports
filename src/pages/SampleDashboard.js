import React from "react";
import { DashboardCard } from "../components/DashboardCard";
import { DashboardTitleCard } from "../components/DashboardTitleCard";
import { DashboardCardsData } from "../utils/mockData";

const styles = {
  root: {
    display: "flex",
    gridGap: 8,
    flexDirection: "column",
    padding: 16,
  },
  section: {
    display: "flex",
    gridGap: 8,
    flexFlow: "wrap",
  }
}

export const SampleDashboard = () => {
  const submissionsRawData = [];
  return (
    <div style={styles.root}>
      <div style={styles.section}>
        <DashboardTitleCard
          title="Production KPIs"
          pathName="/productionKPIs"
        />
        {DashboardCardsData.productionKPIs.map(({ type, title, middleText, bottomText, bottomPercentage }) => 
          <DashboardCard
            type={type}
            title={title}
            middleText={middleText}
            bottomText={bottomText}
            bottomPercentage={bottomPercentage}
            rawData={submissionsRawData}
          />
        )}
      </div>
      <div style={styles.section}>
        <DashboardTitleCard title="Claim KPIs" pathName="/claimKPIs" />
        {DashboardCardsData.claimsKPIs.map(({ type, title, middleText, bottomText, bottomPercentage }) => 
          <DashboardCard
            type={type}
            title={title}
            middleText={middleText}
            bottomText={bottomText}
            bottomPercentage={bottomPercentage}
            rawData={submissionsRawData}
          />
        )}
      </div>
    </div>
  );
};
