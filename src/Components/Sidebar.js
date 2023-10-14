import React from 'react';
import './Slidebar.css';
function Sidebar() {
  return (
    <>
    <div className='sidebarr'>
        <div className='side_head'><span className='icon7 icon_style_other'></span><h2>Dashboard</h2></div>
        <div className='side_blocks'><span className='icon1 icon_style'></span><h4>Dashboard</h4></div>
        <div className='side_blocks'><span className='icon2 icon_style'></span><h4>Product</h4></div>
        <div className='side_blocks'><span className='icon3 icon_style_other'></span><h4>Customers</h4></div>
        <div className='side_blocks'><span className='icon4 icon_style_other'></span><h4>Income</h4></div>
        <div className='side_blocks'><span className='icon5 icon_style_other'></span><h4>Promote</h4></div>
        <div className='side_blocks'><span className='icon6 icon_style_other'></span><h4>Help</h4></div>
        <div className='sidebar_bottom'></div>
        <div className='sidebar_bot side_blocks'><span className='icon8 icon_style_other'></span><h4>Tanishq Singh <br/><r className="side_custom"> Web Developer</r></h4></div>
    </div>
    </>
  )
}

export default Sidebar
