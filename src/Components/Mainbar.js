import React from 'react';
import './Mainbar.css';
function Mainbar() {
  return (
    <>
    <div className='mainbar'>
    <div className='mainbar_custom'><h3>Hello Shahrukh👋🏼,</h3><div className='mainbar_custom_search'><div className='tan'><div className='icon_search'></div></div><span><input className="input_search" type="text" placeholder="Search.."/></span></div></div>
    <div className='mainbar2'>
        <div className='icon_flex'>
            <span className='mainbar_icon1 icon_custom'></span>
            <span><h6>Earning</h6><h2>$198K</h2><h5><g>↑ 37.8%</g> this month</h5></span>
        </div>
        <div className='icon_flex'>
            <span className='mainbar_icon2 icon_custom'></span>
            <span><h6>Orders</h6><h2>$2.4K</h2><h5><r>↓ 2%</r> this month</h5></span>
        </div>
        <div className='icon_flex'>
            <span className='mainbar_icon3 icon_custom'></span>
            <span><h6>Balance</h6><h2>$2.4K</h2><h5><r>↓ 2%</r> this month</h5></span>
        </div>
        <div className='icon_flex'>
            <span className='mainbar_icon4 icon_custom'></span>
            <span><h6>Total Sales</h6><h2>$89K</h2><h5><g>↑ 11%</g> this month</h5></span>
        </div>
    </div>
    
    </div>
    </>
    
  )
}

export default Mainbar
