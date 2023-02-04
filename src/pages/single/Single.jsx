import React from 'react'
import './single.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Chart from '../../components/chart/Chart';
import OriginalTable from '../../components/table/OriginalTable';
const Single = () => {
  return (
    <div className='single'>
        <Sidebar />
        <div className='singleContainer'>
            <Navbar />
            <div className='top'>
                <div className='left'>
                    <div className="editButton">Edit</div>
                    <h1 className='title'> Information </h1>
                    <div className="item">
                        <img 
                        src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                        alt="" 
                        className="itemImg"
                     />
                     <div className="details">
                        <h1 className="itemTitle">Ileyana</h1>
                        <div className="detailItem">
                            <span className='itemKey'>Email: </span>
                            <span className='itemValue'>elli@gmail.com </span>
                        </div>
                        <div className="detailItem">
                            <span className='itemKey'>Phone: </span>
                            <span className='itemValue'>+91 32324334 </span>
                        </div>
                        <div className="detailItem">
                            <span className='itemKey'>Address: </span>
                            <span className='itemValue'>Noida, Uttar Pradesh</span>
                        </div>
                        <div className="detailItem">
                            <span className='itemKey'>Country: </span>
                            <span className='itemValue'>INDIA </span>
                        </div>
                     </div>
                    </div>
                </div> 
                <div className="right">
                    <Chart  aspect={3/1}  title='User Spending ( Last 6 months )'/>
                </div>
            </div>
            <div className='bottom'>
               <h1 className="title">Last Transactions</h1>
               <OriginalTable />
            </div>        
        </div>
    </div>
  )
}
export default Single