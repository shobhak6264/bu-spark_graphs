import React, { useState } from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import generateData from './generateData';
import { dummy_data } from '../data/data1';
import { renderGraphs } from './dynamicdata';
import { objectData , arrayData } from './dataHandle';
export const LineChart = () => {
  let graphData = [];
  let categories = [];
  const [graphType,setgraphType] = useState("line");
  // renderGraphs(dummy_data,categories,graphData)
  // console.log("categories",categories,"GraphData",graphData);
  // const [chartOptions, setChartOptions] = useState({
  //   title: {text : "Museums Go Forward"},
  //   xAxis: {
  //     categories: categories,
  //   },
  //   series: [
  //     { data: graphData }
  //   ],
  //   plotOptions: {
  //     series: {
  //       point: {
  //         events: {
  //           mouseOver(e){
  //             // setHoverData(e.target.category)
  //           }
  //         }
  //       }
  //     }
  //   }
    
  // });
  return (
    <div class="container">
      <div className="header-main">
      <h1 className="header">Museums Moving Forward</h1>
      </div>
       <div className="graph-display">
       {dummy_data.map((data, index) => {
         graphData=[];categories=[];
         typeof data === 'object' ? objectData(data,graphData,categories,setgraphType) : arrayData(data,graphData,categories,index,setgraphType)
         console.log("GraphData",graphData , "Categories",categories) 
         //  generateData(dummy_data,categories,graphData,setChartOptions);


         return (
            <>
               <HighchartsReact
                highcharts={Highcharts}
                options={{
                  chart: {
                    type: 'line'
                },
                  title: {text : "Question"+"  "+(index+1)},
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
                  },
                }}
              />
            </>
          )
        }
        )
        }
        {console.log("GraphData",graphData , "Categories",categories)}
        {}
        {/* <button onClick={getdata} className="graph-button">Update Series</button> */}
       
      </div>
     </div>
     
      
    )
}