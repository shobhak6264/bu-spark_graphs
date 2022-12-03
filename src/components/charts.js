import React, { useState } from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import generateData from './generateData';
import { dummy_data } from '../data/data1';

export const LineChart = () => {
  let graphData = [0];
  let categories = [];
  generateData(dummy_data,categories,graphData);

  const [chartOptions, setChartOptions] = useState({
    xAxis: {
      categories: categories,
    },
    series: [
      { data: graphData }
    ],
    plotOptions: {
      series: {
        point: {
          events: {
            mouseOver(e){
              // setHoverData(e.target.category)
            }
          }
        }
      }
    }
  });

  return (
     <div class="container">
      <h1 className="header">DATA VISUALIZATION</h1>
      <HighchartsReact
          highcharts={Highcharts}
          options={chartOptions}
        />
        
       <div className="graph-display">
       
        {/* <button onClick={getdata} className="graph-button">Update Series</button> */}
       
      </div>
     </div>
     
      
    )
}