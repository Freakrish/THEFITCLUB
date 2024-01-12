import React, {useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './User.css';
import logo from "../../assets/logo.png";

const User = () => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
        fname: '',
        lname: '',
        email: '',
        height: '',
        weight: '',
      });

  useEffect(() => {
    const tokenData = JSON.parse(localStorage.getItem('Fitness'));
    
    if (!tokenData || tokenData.expiration < new Date().getTime()) {
      navigate('/');
      
    }else{
      setUserData(tokenData.data);
    }
  }, [navigate, setUserData]);

  const handleLogout = () => {
    
    localStorage.removeItem('Fitness');
    navigate('/');
  };

  return (
    <div className="user-profile">
      <div className="header-l">
        <img src={logo} alt="" className="logo-user" />
      </div>
      <div className="user-profile-container">
 

        <div className="top">
          USER PROFILE
        </div>
        
        <div className="user-info">
          <div classname="di"><span className='user-text'>First Name:</span > {userData.fname}</div>
          <div classname="di" ><span className='user-text'>Last Name:</span> {userData.lname}</div>
          <div classname="di" ><span className='user-text'>Email:</span> {userData.email}</div>
          <div classname="di"><span className='user-text'>Height:</span> {userData.height} cm</div>
          <div classname="di"><span className='user-text'>Weight:</span> {userData.weight} kg</div>

        </div>
        <div className="bt">
          <button onClick={handleLogout} className="btn-logout">Logout</button>
        </div>
      </div>
      
      
    </div>
  );
};

export default User;


