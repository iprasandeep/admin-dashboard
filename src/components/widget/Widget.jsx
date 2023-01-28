import React from 'react'
import './widget.scss';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
const Widget = () => {
  return (
    <div className='widget'>       
        <div className="left">
            <span className="title">USERS</span>
            <span className="counter">12321</span>
            <span className="link">See All Users</span>
        </div>
        <div className="right">
            <div className="percentage  positive">
            <KeyboardArrowUpOutlinedIcon/>
                20 %
            </div>
            <PersonOutlineOutlinedIcon className='icon'/>
        </div>
    </div>
  )
}

export default Widget