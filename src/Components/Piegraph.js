import React from 'react';
import './Piegraph.css';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(
ArcElement, Tooltip, Legend
)
function Piegraph() {
    const arr={
        labels:['old Customers','New Customers','daily Customers'],
        datasets:[{
        label:'Customers',
        data: [20,40,40],
        backgroundColor:['#f1419f','#7146eb','#f1effc'],
    }]
    };
    const options={
        cutout:45,
        plugins: {
          legend: {
            display: false, // Hide the labels
          }
        }
      }
  return (
    <>
    <div className='piegraph'>
        <h3>Customers</h3><h6>Customers that buy products</h6><span className='pie_text1'>65%</span><span className='pie_text2'>Total New<span className='pie_text3'>Customers</span></span>
        <div className='piegraph1'>
        <Doughnut data={arr} options={options}/>
        </div>
    </div>
    </>
  )
}

export default Piegraph
