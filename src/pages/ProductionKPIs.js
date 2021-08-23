import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { MyLineChart } from "../components/MyLineChart";
import { MyHorizontalBarChart } from "../components/MyHorizontalBarChart";
import VerticalText from "../components/VerticalText";
import HorizontalText from "../components/HorizontalText";

const initialFilters = {
  all: false,
  broker: false,
  direct: false
};

const styles = {
  root: {
    width: '100%'
  },
  topLink: {
    fontSize: 14,
    position: 'absolute',
    top: 10,
    right: 10,
    color: 'white'
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%'
  },
  firstSection: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    marginTop: 30,
    justifyContent: 'center',
    marginBottom: 50
  },
  submissionContainer: {
    display: 'flex',
    flexDirection: 'column',
    fontSize: 16,
    marginLeft: 20,
    width: 300
  },
  horizontalBar: {
    width: '100%',
    padding: 10,
    minWidth: 0
  },
  chartFirstContainer: {
    width: '100%',
    height: '100%',
    minWidth: 0,
    padding: 30,
    paddingBottom: 100,
  },
  horizontalTextContainer: {
    width: '100%',
    position: "relative",
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 30
  },
  verticalTextContainer: {
    display: 'flex',
    width: '100%',
    position: 'relative'
  },
  lineChart: {
    width: '100%',
    height: '100%',
    paddingLeft: 30
  },
  shorizontalTextContainer: {
    width: '100%',
    position: "relative",
    display: 'flex',
    flexDirection: 'column'
  }
}

export const ProductionKPIs = () => {

  const [filters, setFilters] = useState({
    all: true,
    broker: false,
    direct: false,
  })
  const handleInputChange = useCallback((event) => {
    const name = event.target.name;
    setFilters(prev => ({
      ...initialFilters,
      [name]: true
    }))
  }, [setFilters])

  return (
    <div style={styles.root}>
      <Link to="/" style={styles.topLink}>
        Back to Dashboard
      </Link>


      <div style={styles.main}>

        <div style={styles.firstSection}>
          <div style={styles.submissionContainer}> 
            <span>Source of Submission</span>
            <div>
              <input 
                type="radio" 
                name="all" 
                checked={filters['all']} 
                onChange={handleInputChange} 
              />
              <label htmlFor="all">All</label>
            </div>
            <div>
              <input 
                type="radio" 
                name="broker" 
                checked={filters['broker']} 
                onChange={handleInputChange} 
              />
              <label htmlFor="broker">Broker</label>
            </div>
            <div>
              <input 
                type="radio" 
                name="direct" 
                checked={filters['direct']} 
                onChange={handleInputChange} 
              />
              <label htmlFor="direct">Direct</label>
            </div>
          </div>
        </div>
        
        <div className="main-section">
          <div style={styles.horizontalBar}>
              <MyHorizontalBarChart filters={filters}/>
          </div>
          <div style={styles.chartFirstContainer}>
            <div style={styles.horizontalTextContainer}>
              <HorizontalText text="Submission-to-bind ratio, rolling 28 days" />
              <div style={styles.verticalTextContainer}>
                <VerticalText text="Monthly submission-to-bind ratio" />
                <div style={styles.lineChart}>
                  <MyLineChart symbol='$' dataKey="spend" filters={filters}/>
                </div>
              </div>
            </div>
            <div style={styles.shorizontalTextContainer}>
              <HorizontalText text="Premiums, bind, rolling 28 days" />
              <div style={styles.verticalTextContainer}>
                <VerticalText text="Monthly premiums, bind ratio" />
                <div style={styles.lineChart}>
                  <MyLineChart symbol='%' dataKey="percentage" filters={filters}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      
    </div>
  </div>
  );
};
