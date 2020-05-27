import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Doubletake = props => {
  useEffect(() => {
    if(!props.users) props.fetchUsers();
    return(() => {
    });
  },[props]);

  return(
    <div className='doubletake'>
      <ul>
        {
          !props.users ? 'loading' :
          props.users.map(user => {
            return(
              <li key={user._id}>
                <Link to={`/profile/${user._id}`}>
                {user.name}
                </Link>
              </li>
            );
          })
        }
      </ul>
    </div>
  );
};

export default Doubletake;