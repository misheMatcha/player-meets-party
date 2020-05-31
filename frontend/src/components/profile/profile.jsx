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
  const isCurrentUser = user && props.user ? props.user._id === props.current._id : false;
  const [displayMore, setDisplayMore] = useState(false);
  // placeholders
  const online = true;
  const match = '87% Match';
  const photo = 'https://chillabit-pro.s3-us-west-1.amazonaws.com/placeholder_data/users/ocha.jpg';
  const intro = 'Hi, how are you?';
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
          <img src={photo} alt='profile' />
          <div className='profile-header-basics-asl'>
            <div className='profile-header-basics-asl-status'>
              <p className=''>{name}</p>
              {
                !isCurrentUser && online ?
                <div className='asl-online'>
                  <i className="fas fa-circle" />
                </div>
                : ''
              }
              {
                isCurrentUser ?
                <button className='asl-edit' onClick={() => console.log('User settings')}>
                  <i className='fas fa-pencil-alt' />
                </button>
                : ''
              }
            </div>
            <div className='profile-header-basics-asl-details'>
              <p>{age}</p>
              <p className='profile-spacer'>•</p>
              <p className='profile-header-basics-asl-section'>{location}</p>
              {
                isCurrentUser ? '' :
                <>
                  <p className='profile-spacer'>•</p>
                  <p className='profile-header-basics-asl-section asl-match'>{match}</p>
                  <button className='fas fa-ellipsis-h' onClick={() => console.log('User actions')}/>
                </>
              }
            </div>
          </div>
        </div>
        {
          isCurrentUser ? '' :
          <div className='profile-header-passlike'>
            <button className='passlike-buttons passlike-pass' onClick={() => console.log('Pass')}>X PASS</button>
            <button className='passlike-buttons passlike-like' onClick={() => console.log('Like')}><i className='far fa-heart' /> LIKE</button>
          </div>
        }
      </div>
    </div>
    <div className='profile-content'>
      <div className='profile-content-wrap'>
        
        {/* msgs */}
        <div className='profile-content-questions'>
          <div className='profile-content-msg'>
            <div className='profile-content-msg-header'>
              <p>They wrote you an intro</p>
              <button className='fas fa-flag' onClick={() => console.log('Flag user')}/>
            </div>
            <p className='profile-content-msg-intro'>{intro}</p>
            <div className='profile-content-msg-tail'/>
          </div>
          {/* questions */}
          {/* ability to toggle to view more information */}
          <div className='profile-content-questions-section-displaytoggle display-question-height'>
            <div className='profile-content-questions-section'>
              iterable questions
            </div>
          </div>


        </div>

        <div className='profile-content-attributes'>
          attributes
        </div>

      </div>
    </div>
  </div>

  return user ? profile : 'loading'
};

export default withRouter(Profile);