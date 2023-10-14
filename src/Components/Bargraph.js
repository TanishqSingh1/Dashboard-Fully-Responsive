import React from 'react';
import './Bargraph.css';
import {BarChart, Bar, XAxis, YAxis,Tooltip} from 'recharts';
function Bargraph() {
  const arr = [
    { name: 'Jan', value: 20, value2:100},
    { name: 'Feb', value: 15, value2:100 },
    { name: 'Mar', value: 20, value2:100 },
    { name: 'Apr', value: 50, value2:100 },
    { name: 'May', value: 30, value2:100 },
    { name: 'Jun', value: 35, value2:100 },
    { name: 'Jul', value: 40, value2:100 },
    { name: 'Aug', value: 80, value2:100 },
    { name: 'Sep', value: 50, value2:100 },
    { name: 'Oct', value: 55, value2:100 },
    { name: 'Nov', value: 60, value2:100 },
    { name: 'Dec', value: 65, value2:100 },
  ];
  return (
    <>
    <div className='bar_custom'>
      <h3>Overview</h3><h6>Earning</h6>
      <BarChart width={750} height={225} data={arr}>
        <XAxis dataKey='name' axisLine={false} tickLine={false}/>
        <YAxis dataKey='value' axisLine={false} tick={false}/>
        <Bar dataKey="value" fill='#5a32ea' stackId="stack" radius={[9, 9, 9, 9]} shape={<rect className="recharts-bar-rect" />}/>
        <Bar dataKey="value2" fill='#f2efff' stackId="stack" radius={[9, 9, 0, 0]}/>  
        <Tooltip content={({ payload }) => {
            if (payload && payload.length > 0) {
                  const data = payload[0].payload;
                  return (
                        <div className="custom-tooltip">
                        <p>{`Name: ${data.name}`}</p>
                        <p>{`Value: ${data.value}`}</p>
                      </div>
                  );}
                return null;
                            }}/>
      </BarChart>
      </div>
  </>
  )
}

export default Bargraph
