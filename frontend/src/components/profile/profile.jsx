import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom'
import { calculateAge } from '../../util/general_util';

// future additions and refactors
// - maps api to geolocate by zip
// - aws to store profile photos
// - online status
// - matching percentages

const Profile = props => {
  const user = props.user;
  const isCurrentUser = user && (props.user._id === props.current._id);
  // placeholders
  const online = true;
  const match = '87% Match';
  const [fetched, setFetched] = useState(false);
  // separated into modal sections
  // refactor to a more elegant solution later
  const name = user ? user.name : 'loading...';
  const age = user ? calculateAge(user.birthday) : 'loading...';
  const location = 'San Jose, CA'
  // basics
  const orientation = user ? user.orientation : 'loading...';
  const gender = user ? user.gender : 'loading...';
  const relationship_type = user ? user.relationship_type : 'loading...';
  const relationship_status = user ? user.relationship_status : 'loading...';
  // pronouns
  const pronouns = user ? user.pronouns : 'loading...';
  // looks
  // const height = user ? user.height : 'loading...';
  // const body_type = user ? user.body_type : 'loading...';

  useEffect(() => {
    const setTitle = () => document.title = `${name} / ${age} / ${location}`;
    const checkIsUser = () => {
      if(!fetched) props.fetchUser(props.history.location.pathname.slice(9));
      setFetched(true);
    };
    checkIsUser()
    setTitle();
    return (() => {
    });
  });

  const profile = <div className='profile'>

    <div className='profile-header'>
      <div className='profile-header-basics'>
        <div className='profile-header-basics-userinfo'>
          <img src={'https://chillabit-pro.s3-us-west-1.amazonaws.com/placeholder_data/users/ocha.jpg'} alt='profile' />
          <div className='profile-header-basics-asl'>
            <div className='profile-header-basics-asl-status'>
              <p className=''>{name}</p>
              {
                !isCurrentUser && online ? <i className="fas fa-circle" /> : ''
              }
              {
                isCurrentUser ? <i className='fas fa-pencil-alt' /> : ''
              }
            </div>
            <div className='profile-header-basics-asl-details'>
              <p className=''>{age}</p>
              <p className=''>•</p>
              <p className=''>{location}</p>
              <p className=''>•</p>
              <p className=''>{match}</p>
              <button className='fas fa-ellipsis-h'/>
            </div>
          </div>
        </div>
        <div className=''>
          <button className=''>x pass</button>
          <button className=''>x like</button>
        </div>
      </div>
    </div>

  </div>

  return user ? profile : 'loading'
};

export default withRouter(Profile);