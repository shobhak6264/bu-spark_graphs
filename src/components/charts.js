import React, { useState } from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import generateData from './generateData';
import { dummy_data } from '../data/data1';
import { renderGraphs } from './dynamicdata';

export const LineChart = () => {
  let graphData = [];
  let categories = [];
  generateData(dummy_data,categories,graphData);
  const [chartOptions, setChartOptions] = useState({
    title: {text : "Museums Go Forward"},
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
       <div className="graph-display">
       {graphData.map((data, index) => {
          return (
            <>
               <HighchartsReact
                highcharts={Highcharts}
                options={chartOptions}
              />

            </>
          )
        })}
        {/* <button onClick={getdata} className="graph-button">Update Series</button> */}
       
      </div>
     </div>
     
      
    )
}