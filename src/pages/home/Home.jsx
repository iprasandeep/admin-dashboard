import React from 'react'
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import './home.scss';
import Widget from '../../components/widget/Widget';
const Home = () => {
  return (
    <div className='home'>
      <Sidebar/>
      <div className="homeContainer">
        <Navbar />
        Home Container
        <div className="widgets">
          <Widget/>
          <Widget/>
          <Widget/>
          <Widget/>
        </div>
      </div>
    </div>
  )
}

export default Home