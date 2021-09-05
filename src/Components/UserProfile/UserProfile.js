import React from 'react';
import './UserProfile.css';


const UserProfile = props => {
  const { currentUser } = props;
  const { displayName } = currentUser;
  const { picture } = currentUser


  return (
    <div className="userProfile">
      <ul className='listStyle'>
        <li className="imgLi">
          <div className="img">
            {picture ? <img style={{
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
              backgroundColor: "#f7f7f7",
              border: "1px solid #f7f7f7",
              display: "table-cell",
              borderRadius: "100%",
              height: "150px",
              width: "150px",
              backgroundSize: "cover"
            }} src={`${picture}`} /> : <img src='/images/user.png' />}
          </div>
        </li>
        <li className="imgLi">
          <span className="displayName">
            {displayName && displayName}
          </span>
        </li>
      </ul>
    </div>
  );
}

export default UserProfile;