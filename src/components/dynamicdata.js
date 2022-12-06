import React, { useState } from 'react';
import HighchartsReact from "highcharts-react-official";
import Highcharts from 'highcharts';

export const renderGraphs = (categories,graphData) => {
    const chartOptions = {
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
      };
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