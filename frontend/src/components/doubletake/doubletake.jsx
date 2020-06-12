import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { calculateAge } from '../../util/general_util';

const Doubletake = props => {
  const [listIdx, setListIdx] = useState(0);
  const user = props.users ? props.users[listIdx] : '';
  const testPhoto = 'https://chillabit-pro.s3-us-west-1.amazonaws.com/placeholder_data/users/ocha.jpg';
  const match = '87%';
  const location = 'Mountain View, CA';

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
                props.users.map((user, idx) => {
                  if((user._id !== localStorage.currentId) && (idx <= 10)){
                    return <>
                    <Link to={`/profile/${user._id}`}>
                      <img src={testPhoto} alt='profile' />
                    </Link>
                    </>
                  }
                })
              }
            </div>
          }
        </div>
        <div className='doubletake-match-preview'>
          <div className='doubletake-match-preview-details'>
            <div className=''>
              <p>{user.name}</p>
              <p>{calculateAge(user.birthday)} {location} {match}</p>
            </div>
            <div className=''>
              <button>X PASS</button>
              <button>X LIKE</button>
            </div>
          </div>
          <div className=''>
            photo gallery
          </div>
          <div className=''>
            <p>If you like each other, we’ll let you know!</p>
            <div className=''>
              future buttons for gallery view
            </div>
          </div>
        </div>
        <div className='doubletake-match-details'>
          <div className='doubletake-match-details-essays'>
            map out essay questions/answers
          </div>
          <div className='doubletake-match-details-attributes'>
            map out attributes
          </div>
        </div>
      </div>
    </div>
  </div>
};

export default Doubletake;