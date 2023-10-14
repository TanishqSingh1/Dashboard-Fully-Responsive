import React from 'react';
import './Lastbar.css';
function Lastbar() {
  return (
    <>
    <div className='flex'>
      <div className='Product_sell'><h3>Product Sell</h3></div>
      <div className='search_block'><div className='tani'><div className='tani1'></div></div><span><input className='input_custom' type='text' placeholder='search..'/></span></div>
          <select className='select_custom'>
              <option>Last 30 days</option>
              <option>Last 1 year</option>
              <option>Last 1 week</option>
              <option>Last 1 Day</option>
              <option>Today</option>
          </select>
    </div>
    

    <div className='second_block'>
      <div>Product Name</div>
      <div>
        <ul className='list_flex'><li>Stock</li><li>Price</li><li>Total Sales</li></ul>
      </div>
    </div>
    </>
  )
}

export default Lastbar
