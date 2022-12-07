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
<<<<<<< HEAD
=======
  let k=1;
  generateData(dummy_data,categories,graphData);
  k++;
>>>>>>> 967e8b1dcf62e3e99e794121622ef8403b123fb1
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
      <h1 className="header">DATA VISUALIZATION</h1>
       <div className="graph-display">
       {dummy_data.map((data, index) => {
         graphData=[];categories=[];
         typeof data === 'object' ? objectData(data,graphData,categories) : arrayData(data,graphData,categories,index)
         console.log("GraphData",graphData , "Categories",categories) 
         //  generateData(dummy_data,categories,graphData,setChartOptions);
          return (
            <>
               <HighchartsReact
                highcharts={Highcharts}
                options={{
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