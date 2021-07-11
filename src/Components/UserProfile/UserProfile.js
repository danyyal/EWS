import React from 'react';
import './UserProfile.css';


const UserProfile = props => {
  const { currentUser } = props;
  const { displayName } = currentUser;
  // console.log(displayName.displayName);


  return (
    <div className="userProfile">
      <ul className='listStyle'>
        <li>
          <div className="img">
            <img src='/images/user.png'/>
          </div>
        </li>
        <li>
          <span className="displayName">
            {displayName && displayName}
          </span>
        </li>
      </ul>
    </div>
  );
}

export default UserProfile;