import React from 'react';
import './new.scss';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import { DriveFolderUploadOutlined } from '@mui/icons-material';
const New = () => {

  return (
    <div className='new'>
        <Sidebar />
        <div className="newContainer">
            <Navbar />
        <div className='top'>
            <h1>Add New User</h1>
        </div>
        <div className='bottom'>
            <div className="left">
            <img src="https://img.icons8.com/ios/50/null/no-image.png"/>
            </div>
            <div className="right">
                <form action="">
                <div className="formInput">
                        <label htmlFor="file">
                            Upload File:
                            <DriveFolderUploadOutlined  className='icon'/>
                        </label>
                        <input type="file" id='file' style={{display: "none"}}/>
                    </div>
                    <div className="formInput">
                        <label htmlFor="">Username</label>
                        <input type="username" placeholder='ileyana' />
                    </div>
                    <div className="formInput">
                        <label htmlFor="">Full Name</label>
                        <input type="text" placeholder='Ileyana Johnson' />
                    </div>
                    <div className="formInput">
                        <label htmlFor="">Email</label>
                        <input type="email" placeholder='ileyana@gmail.com' />
                    </div>
                    <div className="formInput">
                        <label htmlFor="">Password</label>
                        <input type="password" placeholder='password' />
                    </div>
                    <div className="formInput">
                        <label htmlFor="Phone">Phone</label>
                        <input type="phone" placeholder='+91 312893719' />
                    </div>
                    <div className="formInput">
                        <label htmlFor="">Address</label>
                        <input type="address" placeholder='Street Bay Area' />
                    </div>
                    <div className="formInput">
                        <label htmlFor="">Country</label>
                        <input type="text" placeholder='Country Name' />
                    </div>
                    <button type='submit'>Send</button>
                </form>
            </div>
        </div>

        </div>
    </div>
  )
}

export default New