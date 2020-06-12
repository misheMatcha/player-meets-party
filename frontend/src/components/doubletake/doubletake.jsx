import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Doubletake = props => {
  const [listIdx, setListIdx] = useState(0);
  const user = props.users ? props.users[listIdx] : '';
  const testPhoto = 'https://chillabit-pro.s3-us-west-1.amazonaws.com/placeholder_data/users/ocha.jpg';

  useEffect(() => {
    if(!props.users) props.fetchUsers();
    return(() => {
    });
  });
  
  return <div className='doubletake-container'>
    <div className='doubletake-bg'>
      <div className='doubletake-bg-header'/>
    </div>
    <div className='doubletake-content'>
      <div className='doubletake'>
        <div className='doubletake-userlist'>
          <button className='doubletake-userlist-undo'><i className="fas fa-undo-alt"/></button>
          {
            !props.users ? 'loading...' :
            <div className='doubletake-userlist-photos'>
              {
                props.users.map(user => {
                  if(user._id !== localStorage.currentId){
                    return <>
                      <img src={testPhoto} alt='profile' />
                    </>
                  }
                })
              }
            </div>
          }
        </div>
      </div>
    </div>
  </div>
};

export default Doubletake;