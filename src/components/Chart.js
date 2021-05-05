import React from 'react'
import { Bar } from 'react-chartjs-2'; 

export default function Chart(data) {
    const Labels = data.data.map(emp=>emp.sub);
    const dataVal = data.data.map(val=>val.sem);
    console.log(dataVal);
    const ChartData = {
        labels: Labels,
        datasets : [
            {
                label: "Smoking Performance",
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 1,
                data : dataVal
                
            }
        ]
    }
    return (
        <div>
            <div style = {{width: '80%', height: "400px", display: "inline-flex", backgroundColor:"white"}}>
                <Bar
                    data={ChartData} 
                   options={{
                       maintainAspectRatio: false,
                       title:{
                           display:true,
                           text: 'Smoking performance chart',
                           fontSize: 25,
                       },
                       scales : {
                           yAxes: [{
                               ticks: {
                                   beginAtZero: true,
                                   fontSize: 15,
                                   fontColor: '#000'
                               }
                           }],
                           xAxes: [{
                               ticks: {
                                   fontSize: 16,
                                   fontColor: '#000'
                               }
                           }]
                       }
                   }}
                   data={ChartData}
                   >
                </Bar>
            </div>
           
        </div>
    )}
